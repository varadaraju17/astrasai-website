import { Metadata } from 'next';
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const runtime = 'edge';

const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'Privacy Policy | Astras AI — Data Protection & Privacy Standards',
  description: 'Read the Astras AI Privacy Policy. We are committed to protecting your personal data and ensuring transparency in how we collect, use, and safeguard your information.',
  alternates: {
    canonical: `${domain}/privacy-policy`,
  },
  robots: {
    index: false,
    follow: true,
  }
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />;
}
