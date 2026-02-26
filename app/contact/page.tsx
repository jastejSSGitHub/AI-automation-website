import { redirect } from 'next/navigation';

export default function ContactPage() {
  // Keep pretty URL support while serving the handcrafted static page.
  redirect('/contact.html');
}
