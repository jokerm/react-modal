import React, { ReactChildren, ReactElement, ReactNode, useMemo } from "react";

interface IChildProps {
  [key: string]: ReactElement;
}

const useChildProps = (
  children: ReactElement[] = [],
  elementsAllowed: Array<string>
) => {
  return useMemo(() => {
    const whiteList = new Set(elementsAllowed);
    return children.reduce<IChildProps>((childProps, child) => {
      if (whiteList.has(child?.type as string) == false) {
        throw Error(`element <${child.type}> is not supported`);
      }

      childProps[child.type as string] = child.props;

      return childProps;
    }, {});
  }, [children]);
};

export default useChildProps;
