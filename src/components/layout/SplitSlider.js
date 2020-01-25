import React from 'react';
import styled from 'styled-components'
let elementResizeDetectorMaker = require("element-resize-detector");


const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	border: 5px solid black;
	line-height: 1.6;
	font-family: Ariel, Helvetica, sans-serif;
	font-size: 1em;
	position: relative;
	height: 100%;  
	overflow: hidden;
	min-height:500px;
`
const Handle = styled.div.attrs(props => ({
    style: {
        left: props.left,
        background: props.background,
        transform: props.transform,
    }

}))`

	position: absolute;
	height: 100%;
	display: block;
	background: #FDAB00;
	width: 5px;
	top: 0;
	left: 50%;
	z-index: 3;
`
const SkewedHandle = styled(Handle)`
	top: 50%;
	transform: rotate(0deg) translateY(-50%);
	height: 200%;
	transform-origin: top;
`
const Layer = styled.div.attrs(props => ({
    style: {
        width: props.width,
        transform: props.transform,
    }

}))`
 	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
`

const LayerBottom = styled(Layer)`
	background: #222;
	z-index:1;
`

const SkewedLayerTop = styled(Layer)`
	background: #222;
	color: #fff;
	z-index: 2;
	transform: skew(-33deg);
	margin-left: -1000px;
`

const ContentWrap = styled.div.attrs(props => ({
    style: {
        transform: props.transform,
    }
}))`
	position: absolute;
	width: 95vw;
	min-height: 100%;

`

const SkewedTopContentWrap = styled(ContentWrap)`
	transform: skew(33deg);
	margin-left: 1000px;
`

const ContentBody = styled.div`
	width: 25%;
	position: absolute;
	top: 50%;
	text-align: center;
	transform: translateY(-50%);
	color: #fff;

	@media (max-width: 875px) {
    display: none;
  }
`;
const BottomBody = styled(ContentBody)`
	right: 5%;
`
const TopBody = styled(ContentBody)`
	left: 5%;
	color: #fff;
`

const Title = styled.h1`
	font-size: 2em;
`
const BottomTitle = styled(Title)`
	color: #FDAB00;
`
const Img = styled.img`
	position: absolute;
	height: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

// Parent Component

class SplitSlider extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x: 0, delta: 0, skew: 1000, layerWidth: 50, handle: 50 + '%', parentHeight: 0 + 'px'};
    }

    handleMouseMove(event) {
        if (window){
            let delta = (event.clientX - window.innerWidth / 2) * 0.5;
            this.setState({
                delta: delta,
                layerWidth: event.clientX + this.state.skew + delta + "px",
                handle: event.clientX + delta + 'px'
            });
        }

    }

    handleDegrees(degr) {
        if (degr >= 45) {
            degr = 45;
        } else if (degr <= -45) {
            degr = -45;
        }

        return 'rotate(' + degr + 'deg) ' + 'translateY(-50%)';
    }
    // Because parent is relative we need to find the actual height of the bigger div and append it to parent
    componentDidMount() {
        let erd = elementResizeDetectorMaker();

        let erdUltraFast = elementResizeDetectorMaker({
            strategy: "scroll" //<- For ultra performance.
        });

        const heightLower = this.divElementLower.clientHeight;
        const heightHigher = this.divElementHigher.clientHeight;

        erd.listenTo(document.getElementById("test"), function(element) {
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            console.log("Size: " + width + "x" + height);
        });
        console.debug(this.divElementHigher);
        console.debug(this.divElementLower);
        this.setState({parentHeight: heightHigher > heightHigher ? heightHigher : heightLower});
        console.debug(this.state);
        // alert(this.state.parentHeight)
    }

    render() {

        return (
            <Wrapper style={{height:this.state.parentHeight}} onMouseMove={this.handleMouseMove}>
                <LowerLayer
                    ref={ (divElementLower) => { this.divElementLower = divElementLower } }
                    title={this.props.BottomLayerTitle}
                    text={this.props.BottomLayerText}
                    src={this.props.BottomLayerSrc}>
                    {this.props.BottomContent}
                </LowerLayer>
                <TopLayer
                    ref={ (divElementHigher) => { this.divElementHigher = divElementHigher } }
                    layerWidth={this.state.layerWidth}
                          title={this.props.TopLayerTitle}
                          text={this.props.TopLayerText}
                          src={this.props.TopLayerSrc}
                          degree={this.props.handleRotation}>
                    {this.props.TopContent}
                </TopLayer>
                <SkewedHandle left={this.state.handle} background={this.props.handleColor}
                              transform={this.handleDegrees(this.props.handleRotation)}/>
            </Wrapper>

        );
    }
}

// Bottom Layer Layout Component

class LowerLayer extends React.Component {

    render() {
        return (
            <LayerBottom id="test">
                <ContentWrap>
                    <BottomBody>
                        <BottomTitle>{this.props.title}</BottomTitle>
                        <div>
                            {this.props.children}
                        </div>
                    </BottomBody>
                    <Img src={this.props.src}/>
                </ContentWrap>
            </LayerBottom>
        );
    }
}

// Top Layer Component

class TopLayer extends React.Component {


    render() {
        const SkewedDegree = (prop) => {
            if (prop < 0) {
                prop = Math.abs(prop);
            } else {
                prop = -Math.abs(prop);
            }

            return 'skew(' + prop + 'deg)';
        };

        return (

            <SkewedLayerTop width={this.props.layerWidth || 50} transform={SkewedDegree(this.props.degree)}>
                <SkewedTopContentWrap transform={'skew(' + this.props.degree + 'deg)'}>
                    <TopBody>
                        <Title>{this.props.title}</Title>
                        <p>{this.props.text}</p>
                        <div>
                            {this.props.children}
                        </div>
                    </TopBody>
                    <Img src={this.props.src}/>
                </SkewedTopContentWrap>
            </SkewedLayerTop>
        );
    }
}

export default SplitSlider