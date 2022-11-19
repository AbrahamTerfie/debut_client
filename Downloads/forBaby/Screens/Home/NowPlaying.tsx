import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../Store/RootReducer';
import {Themes} from '../../Styles/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

import songs from '../../DummyData/songs';

// const setupPlayer = async () => {
//     await TrackPlayer.setupPlayer();
//     await TrackPlayer.add(songs);
// }

// const togglePlayback = async (playbackState: State) => {
//     const currentTrack = await TrackPlayer.getCurrentTrack();
//     if (currentTrack === null || playbackState === State.Paused) {
//         await TrackPlayer.play();
//     } else {
//         await TrackPlayer.pause();
//     }

// }

export default function NowPlaying() {
  // const playbackState = usePlaybackState();
  const theme = useSelector((state: RootState) => state.uiStore);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePause = () => {
    setIsPlaying(!isPlaying);
  };
  const {normalize, font} = Themes;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: theme.background,
    },
  });

  // rotaion animation function and never ending loop
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 2,
      duration: 10000,
      useNativeDriver: true,
    }),
  ).start();

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: theme.backgroundSecondary,
          height: normalize(30),
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{color: theme.background, fontSize: normalize(15)}}>
          {' '}
          15 months{' '}
        </Text>
      </View>

      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          marginHorizontal: normalize(50),
          transform: [
            {
              rotate: spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
          borderWidth: normalize(5),
          borderColor: theme.secondary,
          borderStyle: 'dotted',
          height: normalize(200),
          width: normalize(200),
          borderRadius: normalize(100),
        }}
      >
        <Ionicons
          name="musical-note"
          size={normalize(100)}
          color={theme.primary}
        />
      </Animated.View>
      <View>
        {/* album , song name (contained in one line) , artist  */}
        <Text
          numberOfLines={1}
          style={{
            color: theme.textSecondary,
            fontSize: font.mini.fontSize,
            textAlign: 'center',
            fontWeight: 'bold',
            overflow: 'hidden',
            marginHorizontal: normalize(18),
          }}
        >
          {' '}
          album , song name (contained in one line) , artist{' '}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: theme.primary,
            fontSize: font.medium.fontSize,
            textAlign: 'center',
            fontWeight: 'bold',
            overflow: 'hidden',
            marginHorizontal: normalize(20),
            marginVertical: normalize(8),
          }}
        >
          {' '}
          album , song name (contained in one line) , artist{' '}
        </Text>
        <Text
          style={{
            color: theme.textSecondary,
            fontSize: font.mini.fontSize,
            textAlign: 'center',
            fontWeight: 'bold',
            overflow: 'hidden',
            marginHorizontal: normalize(18),
          }}
        >
          {' '}
          album , song name (contained in one line) , artist{' '}
        </Text>
      </View>
      <View>
        {/* previous , pause , play , next icons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginHorizontal: normalize(20),
          }}
        >
          <TouchableOpacity>
            <Ionicons
              name="play-skip-back"
              size={normalize(30)}
              color={theme.primary}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              name={isPlaying ? 'pause' : 'play'}
              size={normalize(30)}
              color={theme.primary}
              onPress={togglePause}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="play-skip-forward"
              size={normalize(30)}
              color={theme.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom: normalize(50)}}>
        {/* progress bar */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: normalize(20),
          }}
        >
          <Text
            style={{
              color: theme.textSecondary,
              fontSize: font.mini.fontSize,
              textAlign: 'center',
              fontWeight: 'bold',
              overflow: 'hidden',
            }}
          >
            {' '}
            0:00{' '}
          </Text>
          <Text
            style={{
              color: theme.textSecondary,
              fontSize: font.mini.fontSize,
              textAlign: 'center',
              fontWeight: 'bold',
              overflow: 'hidden',
            }}
          >
            {' '}
            3:00{' '}
          </Text>
        </View>

        {/* progress bar */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: normalize(20),
          }}
        >
          <View
            style={{
              backgroundColor: theme.primary,
              height: normalize(5),
              width: normalize(100),
            }}
          ></View>
          <View
            style={{
              backgroundColor: theme.textSecondary,
              height: normalize(5),
              width: normalize(100),
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}
