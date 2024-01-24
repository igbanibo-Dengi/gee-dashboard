"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    {
        name: "Jan",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "Feb",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "Mar",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "Apr",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "May",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "Jun",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "Jul",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "Aug",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "Sep",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "Oct",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "Nov",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
    {
        name: "Dec",
        total: Math.floor(Math.random() * 50000) + 10000,
    },
];

export function RevenueChart() {
    return (
        <ResponsiveContainer width="100%" height={350} className="text-foreground">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                    cursor={{ stroke: 'none' }}
                    contentStyle={{ background: '#000000', border: 'none' }}
                    label={{ fill: '#fffffff' }}
                    itemStyle={{ color: '#ffffff' }} // Set the text color of the payload
                />
                <Bar dataKey="total" fill="#34CAA5" radius={[40, 40, 0, 0]} barSize={30} />
            </BarChart>
        </ResponsiveContainer>
    );
}
