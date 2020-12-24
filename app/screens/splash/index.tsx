/* eslint-disable max-len */
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  LayoutRectangle,
} from "react-native";
import { Text } from "react-native-elements";
import { registerScreen, ScreenComponent } from "navigation/utils";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Entypo from "react-native-vector-icons/Entypo";
import Animated, { event, Extrapolate } from "react-native-reanimated";

const { height } = Dimensions.get("screen");

const articleParagraphs = [
  "One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. ",
  "Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least. ",
  "Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. ",
  "Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. ",
  "In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular had eat unsatiable. ",
  "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too. ",
  "Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. Up greatest am exertion or marianne. Shy occasional terminated insensible and inhabiting gay. So know do fond to half on. Now who promise was justice new winding. In finished on he speaking suitable advanced if. Boy happiness sportsmen say prevailed offending concealed nor was provision. Provided so as doubtful on striking required. Waiting we to compass assured. ",
];

const getImage = (i: number) =>
  `https://source.unsplash.com/600x${400 + i}/?blackandwhite`;

const styles = StyleSheet.create({
  featuredImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    marginRight: 20,
    borderRadius: 10,
  },
  bottomActions: {
    height: 80,
    backgroundColor: "rgba(255, 255,255, 1)",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: height * 0.4,
    resizeMode: "cover",
    marginBottom: 20,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: "800",
    marginVertical: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 12,
  },
  paragraph: {
    flex: 1,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 16 * 1.5,
  },
  icon: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Name = "Splash";

const options = {
  stackAnimation: "fade",
};

export type SplashParam = {
  [Name]: {};
};

const Splash: ScreenComponent<SplashParam, "Splash"> = ({}) => {
  const [bottomActions, setBottomActions] = React.useState<
    LayoutRectangle | undefined
  >(undefined);

  const insets = useSafeAreaInsets();

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const topEdge =
    (bottomActions &&
      bottomActions?.y - height + bottomActions?.height + insets.top) ??
    100;

  const inputRange = React.useMemo(
    () => [-1, 0, topEdge - 60, topEdge, topEdge + 1],
    [topEdge],
  );

  const translateY = scrollY.interpolate({
    inputRange,
    outputRange: [0, 0, 0, 0, -1],
  });

  const opacity = scrollY.interpolate({
    inputRange,
    outputRange: [0, 0, 0, 1, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <SafeAreaView>
          <Animated.ScrollView
            onScroll={event([
              {
                nativeEvent: {
                  contentOffset: { y: scrollY },
                },
              },
            ])}
            scrollEventThrottle={16}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            showsVerticalScrollIndicator={false}>
            <Text style={[styles.heading]}>Black & White</Text>
            {articleParagraphs.map((text, index) => {
              return (
                <View key={`item_scroll_${index}`}>
                  {index % 3 === 0 ? (
                    <Image
                      style={styles.image}
                      source={{ uri: getImage(index) }}
                    />
                  ) : null}
                  <Text style={styles.paragraph}>{text}</Text>
                </View>
              );
            })}
            <View
              onLayout={(ev) => {
                setBottomActions(ev.nativeEvent.layout);
              }}
              style={styles.bottomActions}
            />
            <View>
              <Text style={styles.featuredTitle}>Featured</Text>
              {articleParagraphs.slice(0, 3).map((text, index) => {
                return (
                  <View key={`slice-${index}`} style={{ flexDirection: "row" }}>
                    <Image
                      style={styles.featuredImage}
                      source={{ uri: getImage(index) }}
                    />
                    <Text numberOfLines={3} style={styles.paragraph}>
                      {text}
                    </Text>
                  </View>
                );
              })}
            </View>
          </Animated.ScrollView>
          <Animated.View
            style={[
              styles.bottomActions,
              {
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                paddingHorizontal: 20,
                transform: [
                  {
                    translateY,
                  },
                ],
              },
            ]}>
            <View
              style={{
                flexDirection: "row",
                height: 60,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Entypo
                name="adjust"
                size={24}
                color="black"
                style={{ marginHorizontal: 10 }}
              />
              <Animated.Text style={{ opacity }}>326</Animated.Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Animated.View style={[styles.icon, { opacity }]}>
                <Entypo name="export" size={24} color="black" />
              </Animated.View>
              <Animated.View
                style={[
                  styles.icon,
                  {
                    transform: [
                      {
                        translateX: scrollY.interpolate({
                          inputRange,
                          outputRange: [60, 60, 60, 0, 0],
                        }),
                      },
                    ],
                  },
                ]}>
                <Entypo name="credit" size={24} color="green" />
              </Animated.View>
              <Animated.View style={[styles.icon, { opacity }]}>
                <Entypo name="share-alternative" size={24} color="black" />
              </Animated.View>
            </View>
          </Animated.View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default registerScreen<SplashParam, "Splash">(Name, Splash, options);
