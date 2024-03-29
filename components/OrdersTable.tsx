import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FileDown } from 'lucide-react'
import Invoice from './shared/Invoice'
import Link from 'next/link'
const invoicesData = [
    {
        name: 'Marcus Bergson',
        date: 'Nov 15, 2023',
        amount: '$80,000',
        status: 'Paid',
        avatarUrl: '/icons/marcus.png',
        avatarFallback: 'CN',
    },
    {
        name: 'Jaydon Vaccaro',
        date: 'Dec 5, 2023',
        amount: '$60,000',
        status: 'Refund',
        avatarUrl: '/icons/jaydon.png',
        avatarFallback: 'AJ',
    },
    {
        name: 'Corey Schleifer',
        date: 'Jan 20, 2024',
        amount: '$120,000',
        status: 'Paid',
        avatarUrl: '/icons/corey.png',
        avatarFallback: 'JD',
    },
    {
        name: 'Cooper Press',
        date: 'Feb 10, 2024',
        amount: '$45,000',
        status: 'Refund',
        avatarUrl: '/icons/cooper.png',
        avatarFallback: 'ES',
    },
    {
        name: 'Phillip Lubin',
        date: 'Mar 5, 2024',
        amount: '$95,000',
        status: 'Paid',
        avatarUrl: '/icons/philip.png',
        avatarFallback: 'MW',
    },
    {
        name: 'Daniel White',
        date: 'May 8, 2024',
        amount: '$110,000',
        status: 'Paid',
        avatarUrl: 'https://github.com/daniel.png',
        avatarFallback: 'DW',
    },
];



const OrdersTable = () => {
    return (
        <Card className='h-full'>

            <div className='flex items-center justify-between mb-4'>
                <p className='text-lg pl-4 capitalize'>last orders</p>

                <Link href='/' className='text-lg text-[#34CAA5]'>
                    See All
                </Link>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Invoice</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoicesData.map((invoice, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium flex flex-row gap-2 items-center">
                                <Avatar className='h-8 w-8'>
                                    <AvatarImage src={invoice.avatarUrl} />
                                    <AvatarFallback>{invoice.avatarFallback}</AvatarFallback>
                                </Avatar>
                                <p className='whitespace-nowrap'>{invoice.name}</p>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>{invoice.date}</TableCell>
                            <TableCell>{invoice.amount}</TableCell>
                            <TableCell className="text-right" style={{ color: invoice.status === 'Paid' ? '#34CAA5' : '#ED544E' }}>
                                {invoice.status}
                            </TableCell>
                            <TableCell className="text-right">
                                <Dialog>
                                    <DialogTrigger className='flex gap-2 items-center'>
                                        <FileDown size={16} />
                                        <p>View</p>
                                    </DialogTrigger>
                                    <DialogContent>
                                        {/* Add content for the dialog, if needed */}
                                        <Invoice data={invoice} />
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default OrdersTable