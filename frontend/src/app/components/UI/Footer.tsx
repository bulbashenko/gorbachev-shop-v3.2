"use client"
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        {/* Footer content */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          {/* Useful Links */}
          <div className="mb-8 lg:mb-0">
            <h3 className="font-semibold mb-4">{t('usefulLinks.title')}</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  {t('usefulLinks.paymentMethods')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t('usefulLinks.privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t('usefulLinks.returnPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t('usefulLinks.giftCards')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-8 lg:mb-0">
            <h3 className="font-semibold mb-4">{t('contact.title')}</h3>
            <p>
              {t('contact.email')}:{' '}
              <a href="mailto:contact@gorbachev.shop" className="hover:underline">
                contact@gorbachev.shop
              </a>
            </p>
            <p>
              {t('contact.phone')}:{' '}
              <a href="tel:+421950433493" className="hover:underline">
                +421950433493
              </a>
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">{t('followUs.title')}</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-8 mb-16 text-center text-xs">
          <p>{t('disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
};