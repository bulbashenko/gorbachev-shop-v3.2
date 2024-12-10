#!/bin/bash

# Скрипт для создания пулл-реквестов из ветки dev во все остальные ветки, включая main

# Настройки
SOURCE_BRANCH="dev"  # Ветка-источник
TITLE_PREFIX="Merge dev into"  # Префикс заголовка PR
BODY_TEMPLATE="Автоматический пулл-реквест для слияния ветки dev в ветку %s."

# Получение текущего репозитория
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)

if [ -z "$REPO" ]; then
  echo "Не удалось определить текущий репозиторий. Убедитесь, что вы находитесь в директории репозитория GitHub."
  exit 1
fi

echo "Текущий репозиторий: $REPO"

# Получение списка всех веток, кроме ветки-источника
echo "Получение списка целевых веток..."
TARGET_BRANCHES=$(gh api repos/$REPO/branches --paginate | jq -r '.[].name' | grep -v "^${SOURCE_BRANCH}$")

if [ -z "$TARGET_BRANCHES" ]; then
  echo "Не найдено целевых веток для создания пулл-реквестов."
  exit 0
fi

# Цикл по каждой целевой ветке
for TARGET in $TARGET_BRANCHES; do
  echo "Обработка ветки: $TARGET"

  # Проверка существования открытого PR из SOURCE_BRANCH в TARGET
  EXISTING_PR=$(gh pr list --head "$SOURCE_BRANCH" --base "$TARGET" --state open --json number --jq '.[].number')

  if [ -n "$EXISTING_PR" ]; then
    echo "Пулл-реквест уже существует для ветки $TARGET (PR #$EXISTING_PR). Пропуск..."
    continue
  fi

  # Создание пулл-реквеста
  PR_TITLE="${TITLE_PREFIX} ${TARGET}"
  PR_BODY=$(printf "$BODY_TEMPLATE" "$TARGET")

  echo "Создание пулл-реквеста: $PR_TITLE"
  
  gh pr create \
    --repo "$REPO" \
    --base "$TARGET" \
    --head "$SOURCE_BRANCH" \
    --title "$PR_TITLE" \
    --body "$PR_BODY" \
    --label "auto-generated"  # Опционально: добавляет метку к PR

  if [ $? -eq 0 ]; then
    echo "Пулл-реквест успешно создан для ветки $TARGET."
  else
    echo "Ошибка при создании пулл-реквеста для ветки $TARGET."
  fi

  echo "----------------------------------------"
done

echo "Все пулл-реквесты обработаны."
