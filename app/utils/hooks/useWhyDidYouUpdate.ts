/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

function useWhyDidYouUpdate<TProps = any>(name: string, props: TProps) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = React.useRef<TProps>();

  React.useEffect(() => {
    const { current } = previousProps;
    if (current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...current, ...props });
      // Use this object to keep track of changed props
      const changesObj: any = {};
      // Iterate through keys
      allKeys.forEach(key => {
        // If previous is different from current
        // @ts-ignore
        if (current[key] !== props[key]) {
          // Add to changesObj
          // @ts-ignore
          changesObj[key] = { from: current[key], to: props[key] };
        }
      });

      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.info('[why-did-you-update]', name, changesObj);
      }
    }

    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
}

export default useWhyDidYouUpdate;
