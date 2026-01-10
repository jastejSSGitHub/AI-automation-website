import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the static index.html file
  redirect('/index.html');
}
