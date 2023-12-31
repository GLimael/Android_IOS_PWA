import { View } from 'react-native'
import React from 'react'
import Svg, { Ellipse, G, Line, Rect } from 'react-native-svg'
import colors from '../Cores/Cores'
import { createAnimatableComponent } from 'react-native-animatable'

const AnimatableLine = createAnimatableComponent(Line);
const AnimatableRect = createAnimatableComponent(Rect);
const AnimatableEllipse = createAnimatableComponent(Ellipse);

export default function Figura ({palavraErrada}){

    const Corda = <AnimatableLine animation={'fadeIn'} x1="200" y1="0" x2="200" y2="80" stroke="brown" strokeWidth="5" />
    const Cabeca = <AnimatableEllipse animation={'fadeIn'} cx="200" cy="110" rx="35" ry="35" fill={colors.shapeColor} />
    const Pescoco = <AnimatableRect animation={'fadeIn'} width="10" height="20" x="195" y="140" fill={colors.shapeColor} />
    const Bracos = <AnimatableLine animation={'fadeIn'} x1="260" y1="165" x2="140" y2="165" stroke={colors.shapeColor} stroke-Linecap="round" strokeWidth="10" />
    const Corpo = <AnimatableRect animation={'fadeIn'} width="10" height="50" x="195" y="170" fill={colors.shapeColor} />
    const Pernas = <G>
                    <AnimatableLine animation={'fadeIn'} x1="200" y1="220" x2="150" y2="270" stroke={colors.shapeColor} stroke-Linecap="round" strokeWidth="10" />
                    <AnimatableLine animation={'fadeIn'} x1="200" y1="220" x2="250" y2="270" stroke={colors.shapeColor} stroke-Linecap="round" strokeWidth="10" />
                </G>

    return (
        <View> 
            <Svg version="1.1" viewBox="0 0 300 400" preserveAspectRatio="xMinYMin meet" class="svg-content" width="140" height="200">
                <Rect fill={colors.FrameColor} width="250" height="10" x="5" y="15" />
                <Rect fill={colors.FrameColor} width="10" height="350" x="20" y="0" />
                <Rect fill={colors.FrameColor} width="250" height="40" x="0" y="350" />
                    {palavraErrada > 0 ? Corda : null}
                    {palavraErrada > 1 ? Cabeca : null}
                    {palavraErrada > 2 ? Pescoco : null}
                    {palavraErrada > 3 ? Bracos : null}
                    {palavraErrada > 4 ? Corpo : null}
                    {palavraErrada > 5 ? Pernas : null}
      </Svg>
        </View>
    )
}