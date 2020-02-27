import React,{Fragment} from 'react';
import * as ReactDOM from "react-dom";

class MatrixLetters extends React.Component {

    constructor(props) {
        super(props);
        this.$messages = props.message;

        // step is how much we gonna increase the delay with each loop
        // prob would be a random number that each step would increase the probability at
        this.glitches = '-|/\\';
        this.step = 1000;
        this.$prob = 100;
        this.$messageObj = [];
        this.myRef = React.createRef();
        this.delay = 200;
        this.state = {
            lines: this.$messages.length,
            html : this.initialize(this.$messages),
            finished: false,
            firstRun : true,


        }
    }

    inputRefs = [];

    setRef = (ref) => {
        this.inputRefs.push(ref);
    };


    initialize = (messages) => {
        let lines = [];
       lines= messages.map((val,key) => {
            return <p ref={this.setRef} key={key}></p>
        })
        return lines
    }

    startGlitching = () =>{
      let  wrap = function(text,  classes) {
            return "<span class=\"" + classes + "\">" + text + "</span>";
        };

        this.$messages.map((val,key)=> {

            let glitchText = this.glitches;
            let glitchCharacters = glitchText.split('');
            let glitchLength = glitchCharacters.length;
            // let messageLength = val.length;
            // console.debug(messageLength);

            // Glitches
           let glitches = (function() {
                let _i, _len, _results;
                _results = [];
                for (_i = 0, _len = glitchCharacters.length; _i < _len; _i++) {
                    let letter = glitchCharacters[_i];
                    _results.push(wrap(letter, 'glitch'));
                }
                return _results;
            })();
            console.debug(glitches);

            // Ghost Characters
          let  ghostText = this.inputRefs[key].innerText;
          let  ghostCharacters = ghostText.split('');
          let  ghosts = (function() {
                let _i, _len, _results;
                _results = [];
                for (_i = 0, _len = ghostCharacters.length; _i < _len; _i++) {
                   let letter = ghostCharacters[_i];
                    _results.push(wrap(letter, 'ghost'));
                }
                return _results;
            })();
            console.debug('[Ghosts]',ghosts);


            let textCharacters = this.$messages[key].split('');
            let textLength = textCharacters.length;
            let order = (function() {
               let _results = [];
                for (let _i = 0; 0 <= textLength ? _i < textLength : _i > textLength; 0 <= textLength ? _i++ : _i--){ _results.push(_i); }
                return _results;
            }).apply(this).sort(this.shuffle);
            console.debug('[Order]',order);
            let i;
            let currentPhrase;
            for (i=0;i<textLength;i++){
                setTimeout( ()=> {
                    const currentHtml = [...this.state.html];
                     currentPhrase = this.inputRefs[key].innerText;
                     console.debug(currentPhrase);
                     console.debug(this.$messages[key][i])
                     currentPhrase = currentPhrase +  this.$messages[key][i];
                     console.debug('After ',currentPhrase)
                    currentHtml[key] = currentPhrase;
                    this.setState({ html:currentHtml });


                },3000)

            }

        })
    }
    componentDidMount() {

        console.debug(this.inputRefs)
        this.startGlitching();
        // this.myRef.current.value=this.myRef.current.value + " !!"
    }

    render() {
        return (
            <Fragment>
                {
                     this.state.html
                }
            </Fragment>

        );
    }


};

export default MatrixLetters;
