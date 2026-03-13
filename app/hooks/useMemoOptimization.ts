'use client';

import { useRef } from 'react';
import isEqual from 'lodash/isEqual';

/**
 * Custom hook for deep comparison memoization
 */
export function useDeepMemo<T>(factory: () => T, dependencies: unknown[]): T {
  const previousDependenciesRef = useRef<unknown[]>([]);
  const memoizedValueRef = useRef<T | undefined>(undefined);

  /* eslint-disable react-hooks/refs */
  if (!isEqual(previousDependenciesRef.current, dependencies) || memoizedValueRef.current === undefined) {
    previousDependenciesRef.current = dependencies;
    memoizedValueRef.current = factory();
  }

  return memoizedValueRef.current as T;
}

/**
 * Hook to memoize heavy component props
 */
export function useMemoizedProps<T>(props: T): T {
  return useDeepMemo(() => props, [props]);
}

export default useDeepMemo;
