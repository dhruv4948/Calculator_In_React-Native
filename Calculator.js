import react, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";

const calculator = () => {
  const [Darktheme, setDarktheme] = useState(false);
  const [Result, setResult] = useState("0");

  const calculate = (title) => {
    if (title == "C") {
      setResult("");
    } else if (title == "DL") {
      setResult(Result.substring(0, Result.length - 1));
    } else if (title == "=") {
      const ans = Number(eval(Result).toFixed(3)).toString();
      // const ans = Number(eval(Result)).toFixed(3).toString();
      setResult(ans);
    } else setResult(Result + title);
  };

  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        padding: 10,
        backgroundColor: getColours(colors.light1),
        margin: 16,
        height: 70,
        width: 70,
        textAlign: "center",
        borderRadius: 10,
        elevation: 1,
      }}
    >
      <Text
        style={{
          fontSize: 37,
          color: "black",
          textAlign: "center",
          textAlignVertical: "center",
          color: getbtncolor(type),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getbtncolor = (type) => {
    if (type == "top") {
      return "#35fbd6";
    } else if (type == "right") {
      return "#EB6363";
    } else {
      return getColours(colors.dark, colors.light);
    }
  };

  const colors = {
    dark: "#22252D",
    dark1: "#292B36",
    dark2: "#272B33",
    light: "#FFF",
    light1: "#F1F1F1",
    light2: "#F7F7F7",
  };
  const getColours = (light, dark) => (Darktheme ? dark : light);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingVertical: 20,
        alignItems: "center",
        backgroundColor: getColours(colors.light, colors.dark),
      }}
    >
      <Switch
        value={Darktheme}
        thumbColor={getColours(colors.dark, colors.light)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
        onValueChange={() => setDarktheme(!Darktheme)}
      />

      <Text
        style={{
          fontSize: 50,
          width: "100%",
          textAlign: "right",
          paddingRight: "20",
          marginTop: "67%",
          marginRight: "10%",
          paddingBottom: 20,
          color: getColours(colors.dark, colors.light),
        }}
      >
        {Result}
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: getColours(colors.light1, colors.dark1),
          justifyContent: "center",
        }}
      >
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="num" />
        <Btn title="8" type="num" />
        <Btn title="9" type="num" />
        <Btn title="*" type="right" />
        <Btn title="4" type="num" />
        <Btn title="5" type="num" />
        <Btn title="6" type="num" />
        <Btn title="-" type="right" />
        <Btn title="1" type="num" />
        <Btn title="2" type="num" />
        <Btn title="3" type="num" />
        <Btn title="+" type="right" />
        <Btn title="00" type="num" />
        <Btn title="0" type="num" />
        <Btn title="." type="num" />
        <Btn title="=" type="right" />
      </View>
    </View>
  );
};
export default calculator;

