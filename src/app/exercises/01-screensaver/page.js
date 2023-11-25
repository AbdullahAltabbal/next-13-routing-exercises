import Link from 'next/link';
import React from 'react';


function ScreenSaverExercise() {
  return (
    <main >
      <ul><Link href={"/exercises/01-screensaver/lavender"}> lavender </Link></ul>
      <ul><Link href={"/exercises/01-screensaver/yellow"}> yellow </Link></ul>
      <ul><Link href={"/exercises/01-screensaver/rblacked"}> black </Link></ul>
      <ul><Link href={"/exercises/01-screensaver/green"}> green </Link></ul>
      <ul><Link href={"/exercises/01-screensaver/blue"}> blue </Link></ul>
    </main>
  );
}

export default ScreenSaverExercise;
