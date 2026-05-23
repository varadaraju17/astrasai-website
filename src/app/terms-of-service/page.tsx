import { Metadata } from 'next';
import TermsOfServiceClient from "./TermsOfServiceClient";



const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'Terms of Service | Astras AI — Legal Terms & Conditions',
  description: 'Review the Astras AI Terms of Service. Understand your rights and obligations when using our AI-powered websites, apps, and technology services.',
  alternates: {
    canonical: `${domain}/terms-of-service`,
  },
  robots: {
    index: false,
    follow: true,
  }
};

export default function TermsOfService() {
  return <TermsOfServiceClient />;
}
