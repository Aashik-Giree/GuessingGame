import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Alert, Pressable } from 'react-native';

const NumberGuessingApp: React.FC = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  };

  const [targetNumber, setTargetNumber] = useState<number>(generateRandomNumber());
  const [guess, setGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<number[]>([]);
  const [numAttempts, setNumAttempts] = useState<number>(0);

  const guessedNumber = parseInt(guess);

  const handleGuess = () => {
    if (!isNaN(guessedNumber)) {
      setGuesses([...guesses, guessedNumber]);
      setNumAttempts(numAttempts + 1);

      if (guessedNumber === targetNumber) {
        Alert.alert(`Congratulations! You guessed the number in ${numAttempts + 1} attempts.`);
        setTargetNumber(generateRandomNumber());
        setGuess('');
        setGuesses([]);
        setNumAttempts(0);
      } else if (guessedNumber < targetNumber) {
        Alert.alert('Your guess is too low.');
        // setNumAttempts(numAttempts+1)
        setGuess('')
      } else {
        Alert.alert('Your guess is too high.');
        setGuess('')
      }
    } else {
      Alert.alert('Please enter a valid number.');
      setGuess('')
    }
  };

  const check = () =>{
    
    if(guessedNumber < targetNumber){
      <Text>Your guess is too low</Text>
      setGuess('');
    }else if(guessedNumber > targetNumber){
      <Text>Your guess is too high</Text>
      setGuess('');
    }else{
      <Text>Please enter valid number</Text>
    }
  }

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
      }}>I am thinking of a number between 1-100</Text>
      <Text style={{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
      }}>Can you guess it?</Text>
      <TextInput
        style={{
          width: 100,
          borderWidth: 1,
          margin: 10,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          color:'#AA69F8'
        }}
        onChangeText={(text) => setGuess(text)}
        value={guess}
        keyboardType="numeric"
      />
      <Pressable onPress={handleGuess} style={{
        width: 100,
      }}>
        <Text style={{
          color: '#fff',
          fontSize: 25,
          fontWeight: 'bold',
          backgroundColor: '#AA69F8',
          textAlign: 'center'
        }}>Guess</Text>
      </Pressable>

      <ScrollView style={{
        marginTop: 20,
        maxHeight: 150,
      }}>
         
        {/* <Text>Your Guess is too high/low</Text>
        <Text>Number of gueses: {numAttempts}</Text>
        <Text>Guessed number are</Text>  */}

       

        {guesses.map((guess, index) => (
          <Text key={index} style={{
            marginBottom: 5,
          }}>
            Guess #{index + 1}: {guess}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default NumberGuessingApp;
