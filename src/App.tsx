import {ReactNode, useState} from 'react';
import * as _ from "lodash";

const App = (): ReactNode => {

    const [additionalProcent] = useState(16)
    const [maxSum] = useState(210000)

    const asd = () => {
        const array = []
        let currentSum = 0
        for (let i = 10000; currentSum < maxSum; i = i / 100 * (additionalProcent + 100)) {
            currentSum = Math.floor(currentSum) + i
            array.push({
                currentSumm: Math.floor(currentSum),
                pay: Math.floor(i)
            })
        }
        return {
            array: [...array.splice(0, array.length - 1), {
                currentSumm: maxSum,
                pay: array[array.length - 1].pay - additionalProcent
            }], currentSum: currentSum
        }
    }

    const qwe = asd()
    console.log(qwe.array.length / 2)
    return (
        <div>

            <div className='grid grid-cols-7 gap-4'>

                {qwe.array.map((value) => <>
                    {_.times(13).map(() => <div className='border  min-h-10 p-2 bg-gray-700 text-white'>-</div>)}
                    <div className='border min-h-10 p-2 bg-gray-700 text-white'>
                        <p> {value.currentSumm} Нынешаяя сумма</p>
                        <p>{value.pay} Платеж</p>
                    </div>

                </>)}
            </div>
        </div>
    );
};

export default App;
