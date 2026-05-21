'use client';
import { Suspense } from 'react';
import MatchContent from './MatchContent';

export default function MatchPage() {
  return (
    <Suspense fallback={<p>Loading commute matches...</p>}>
      <MatchContent />
    </Suspense>
  );
}
