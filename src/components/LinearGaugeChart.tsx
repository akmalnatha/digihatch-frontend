import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-lineargauge';

interface LinearGaugeProps {
    chartType: "Normal" | "RoundedRectangle" | "Thermometer";
    format: string;
    pointerType: "Bar" | "Marker",
    containerWidth: number,
    containerHeight: number,
}

export function LinearGaugeChart({chartType, format, pointerType, containerWidth, containerHeight}: LinearGaugeProps) {
    return(
        <LinearGaugeComponent container={ { width: containerWidth, type: chartType, height: containerHeight, backgroundColor:"#DFD5F5" } } width='50%' margin= {{ left: 40, right: 0, top: 0, bottom: 0 }} >
        <AxesDirective>
            <AxisDirective minimum={0} maximum={100} labelStyle={ { format: format } }>
                <PointersDirective>
                    <PointerDirective value={50} width={15} type={pointerType} color='#5A3D99'>
                    </PointerDirective>
                </PointersDirective>
                <RangesDirective>
                    <RangeDirective start={0} end={3} startWidth={15} endWidth={15} color="#23AEB1">
                    </RangeDirective>
                    <RangeDirective start={3} end={25} startWidth={15} endWidth={15} color="#41FF5F">
                    </RangeDirective>
                    <RangeDirective start={25} end={30} startWidth={15} endWidth={15} color="#F3BC00">
                    </RangeDirective>
                    <RangeDirective start={30} end={100} startWidth={15} endWidth={15} color="#FF575F">
                    </RangeDirective>
                </RangesDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>
    );
}