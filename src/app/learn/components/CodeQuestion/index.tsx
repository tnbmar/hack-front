"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Button, Flex, Heading } from "@radix-ui/themes";

const CodeQuestion = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");

  const onChange = React.useCallback((val: any, viewUpdate: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  const handleCompile = () => {
    try {
      eval(value);
      alert("Код скомпилирован");
    } catch (e) {
      alert("Что то пошло не так, проверьте пожалуйста");
    }
  };

  return (
    <Flex direction={"column"} gap={"3"} height={"100%"}>
      <Heading size={"7"}>Допиши код, чтобы он скомпилировался!</Heading>

      <div style={{ flexGrow: 1 }}>
        <CodeMirror
          value={value}
          height="400px"
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />
      </div>

      <Button onClick={handleCompile}>Скомпилировать</Button>
    </Flex>
  );
};

export default CodeQuestion;
