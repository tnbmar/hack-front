"use client";

import { PropsWithChildren, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import extraScopePlugin from "stylis-plugin-extra-scope";

type Props = {
  scope?: string;
};

const StyledComponentProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
  scope,
}) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return styles;
  });

  if (typeof window !== "undefined") return children;

  const stylisPlugins = scope ? [extraScopePlugin(`#${scope}`)] : [];

  return (
    <StyleSheetManager
      stylisPlugins={stylisPlugins}
      sheet={styledComponentsStyleSheet.instance}
    >
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentProvider;
