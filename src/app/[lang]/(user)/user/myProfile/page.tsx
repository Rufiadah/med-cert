import React from 'react'
import { getDictionary } from '@/app/[lang]/dictionaries';
import UserProfile from '@/components/user/profile';

export default async function UserProfilePage({ params }: { params: Promise<{ lang: "en" | "ar" }>}) {
  const {lang} = await params;
  const dict = await getDictionary(lang);
  return (
   <>
   <UserProfile/>
   </>
  )
}

