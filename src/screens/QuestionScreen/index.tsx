/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {COLORS} from '../../constants';
import data from '../../data/QuizData';
import { MainParams } from '../../navigators/StackNavigator';

interface Props extends NativeStackScreenProps<MainParams, 'Question'> {}

const Component = (props: Props) => {
  const {navigation} = props;
  const { route: {params: name} } = props;

  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  
  const validateAnswer = selectedOption => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption === correct_option) {
      setScore(score + 1);
    }
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    navigation.navigate('Login');
  };

  const renderQuestion = () => {
  
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.t1}>{currentQuestionIndex + 1}</Text>
          <Text style={styles.t2}>/ {allQuestions.length}</Text>
        </View>

        <Text style={styles.t3}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map(option => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 3,
              borderColor:
                option === correctOption
                  ? COLORS.success
                  : option === currentOptionSelected
                  ? COLORS.error
                  : COLORS.secondary + '40',
              backgroundColor:
                option === correctOption
                  ? COLORS.success + '20'
                  : option === currentOptionSelected
                  ? COLORS.error + '20'
                  : COLORS.secondary + '20',
              height: 60,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text style={styles.textOption}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.safeView}>
        {renderQuestion()}
        {renderOptions()}
        {renderNextButton()}

        <Modal animationType="slide" visible={showScoreModal}>
          <View style={styles.modalBackground}>
            <ImageBackground
              source={require('../../assets/images/fondoTrebol.jpg')}
              style={styles.backgroundImage}>
              <View style={styles.modalContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Hola {name}</Text>
                </View>
                <Text style={styles.t4}>
                  {score > allQuestions.length / 2
                    ? 'Bien hecho :)'
                    : 'Estás salado...'}
                </Text>
                <View style={styles.scoreView}>
                  <Text
                    style={{
                      fontSize: 30,
                      color:
                        score > allQuestions.length / 2
                          ? COLORS.success
                          : COLORS.error,
                    }}>
                    {score}
                  </Text>
                  <Text style={styles.t5}>/ {allQuestions.length}</Text>
                </View>

                <TouchableOpacity
                  onPress={restartQuiz}
                  style={styles.restartButton}>
                  <Text style={styles.textRestart}>Retry Quiz</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Component;

const styles = StyleSheet.create({
  background: {
    marginVertical: 40,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  t1: {
    color: COLORS.white,
    fontSize: 20,
    opacity: 0.6,
    marginRight: 2,
  },
  t2: {color: COLORS.white, fontSize: 18, opacity: 0.6},
  t3: {
    color: COLORS.white,
    fontSize: 30,
  },
  textOption: {fontSize: 20, color: COLORS.white},
  currentOption: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    marginTop: 20,
    width: '100%',
    backgroundColor: COLORS.accent,
    padding: 20,
    borderRadius: 5,
  },
  nextButtonText: {fontSize: 20, color: COLORS.white, textAlign: 'center'},
  safeArea: {
    flex: 1,
  },
  safeView: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
    position: 'relative',
  },
  viewModal: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerViewModal: {
    backgroundColor: COLORS.white,
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  t4: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  scoreView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
  },
  t5: {
    fontSize: 25,
    color: 'black',
  },
  restartButton: {
    backgroundColor: COLORS.accent,
    width: '60%',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    alignContent: 'center',
    position: 'absolute',
    bottom: 40,
    left: 80,
    marginBottom: 10,
  },
  textRestart: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 20,
  },
  modalBackground: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    height: '70%',
    width: '80%',
    backgroundColor: '#ffffff80',
    borderRadius: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: 'black',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 35,
    backgroundColor: '#fffff',
  },
});
