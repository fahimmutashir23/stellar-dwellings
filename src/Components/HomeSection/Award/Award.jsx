import bgHouse from '../../../assets/Background/bgHouse.jpg'
import CountUp from 'react-countup';

const Award = () => {
    return (
        <div>
            <div
            style={{backgroundImage: `url(${bgHouse})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
            className="h-60 bg-fixed">
                <div className='bg-gray-900 h-full w-full bg-opacity-60 flex items-center justify-center'>
                    <div className='flex justify-between w-5/6 text-white'>
                        <div>
                            <CountUp
                              start={70}
                              end={100}
                              duration={2.75}
                              separator=" "
                              suffix=" +"
                              style={{fontSize: 50, fontWeight: 'bold', fontStyle: 'italic'}}
                            />
                            <p className='text-2xl -mt-3 text-yellow-300 font-medium'>Investment</p>
                        </div>
                        <div>
                            <CountUp
                              end={25}
                              duration={2.75}
                              separator=" "
                              suffix=" +"
                              style={{fontSize: 50, fontWeight: 'bold', fontStyle: 'italic'}}
                            />
                            <p className='text-3xl -mt-3 text-yellow-300 font-medium'>Award</p>
                        </div>
                        <div>
                            <CountUp
                              end={6}
                              duration={3}
                              separator=" "
                              suffix=" +"
                              style={{fontSize: 50, fontWeight: 'bold', fontStyle: 'italic'}}
                            />
                            <p className='text-2xl -mt-3 text-yellow-300 font-medium'>Proficient</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;