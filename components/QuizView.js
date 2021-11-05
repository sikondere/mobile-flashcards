import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class QuizView extends Component {

    state = {
        correct_answers: 0,
        current_qn_idx: 0,
        show_answer: false,
        showAnswerButton: true,
    };

    render() {

        const { decks } = this.props;
        const deck = this.props.route.params.deck;
        const questions = decks[deck]['questions'];

        let question ='';
        let answer = '';

        if(this.state.current_qn_idx < questions.length) {
            question = questions[this.state.current_qn_idx].question;
            answer = questions[this.state.current_qn_idx].answer;
        }

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{
                question.length < 1 
                ? <View>
                    <Text>This deck has no cards</Text>
                    <Button 
                        title = 'Go To Deck'
                        onPress = {() => this.props.navigation.navigate('Deck', { deck: deck, no_qns: questions.length})}
                    />
                </View>
                :<View>
                    <Text>{this.state.current_qn_idx < questions.length 
                        ? this.state.current_qn_idx + 1 
                        : questions.length} of {questions.length} questions
                    </Text>
                <Text>{question}</Text>
                    <View>
                        {
                            this.state.showAnswerButton
                            ? <Button 
                                title = 'Show Answer'
                                onPress = {() => this.setState({show_answer:true})}
                            />
                            : null
                        }
                    </View>
                    <View>
                        {
                            this.state.show_answer
                            ? <View>
                                <Text>{answer}</Text>
                                <Button 
                                    title = 'Correct'
                                    onPress ={() => {
                                        this.setState((prevState) => {
                                            return {
                                                correct_answers: prevState.correct_answers + 1,
                                                current_qn_idx: prevState.current_qn_idx + 1,
                                                show_answer:false,
                                                showAnswerButton: prevState.current_qn_idx + 1 == questions.length ? false : true,
                                            }
                                        })
                                    }}
                                />
                                <Button 
                                    title = 'Incorrect'
                                    onPress ={() => {
                                        this.setState((prevState) => {
                                            return {
                                                current_qn_idx: prevState.current_qn_idx + 1,
                                                show_answer:false,
                                                showAnswerButton: prevState.current_qn_idx + 1 == questions.length ? false : true,
                                            }
                                        })
                                    }}
                                />
                            </View>
                            : this.state.current_qn_idx < questions.length
                                    ? null
                                    : <View>
                                        <Text>You got {this.state.correct_answers} / {questions.length} answers correct</Text>
                                        <Button 
                                            title = 'Restart Quiz'
                                            onPress ={() => {
                                                this.setState((prevState) => {
                                                    return {
                                                        correct_answers: 0,
                                                        current_qn_idx: 0,
                                                        show_answer: false,
                                                        showAnswerButton: true,
                                                    }
                                                })
                                            }}
                                        />
                                        <Button 
                                            title = 'Go To Deck'
                                            onPress = {() => this.props.navigation.navigate('Deck', { deck: deck, no_qns: questions.length})}
                                        />
                                    </View>
                        }
                        
                    </View>
                </View>
        }</View>);
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(QuizView);

