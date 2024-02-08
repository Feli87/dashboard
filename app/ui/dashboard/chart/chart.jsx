"use client"
import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const error = console.error;
console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
};
const data = [
    {
        name: 'Monday',
        visit: 2000,
        click: 3400
    },
    {
        name: 'Tuesday',
        visit: 3000,
        click: 4000
    },
    {
        name: 'Wednesday',
        visit: 4000,
        click: 5000
    },
    {
        name: 'Thursday',
        visit: 5000,
        click: 6000
    },
    {
        name: 'Friday',
        visit: 6000,
        click: 7000
    },
    {
        name: 'Saturday',
        visit: 7000,
        click: 8000
    },
    {
        name: 'Sunday',
        visit: 8000,
        click: 9000
    }
];
const Chart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" tick={{ fill: 'white' }} ticks={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]} />
                    <YAxis domain={[0, 9000]} tick={{ fill: 'white' }} type="number" allowDecimals={false} ticks={[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]} />
                    <Tooltip contentStyle={{ backgroundColor: '#2e374a', border: 'none', borderRadius: '10px' }} />
                    <Legend />
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default Chart

