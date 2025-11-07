import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bhogapuram Gated Community Plots - Premium Investment Opportunity',
  description: 'VMRDA approved gated community plots in Bhogapuram on NH-16. Near Greenfield Airport & Visakhapatnam. Starting at ₹18,500/sq yard.',
  keywords: 'Bhogapuram plots, VMRDA approved, gated community, real estate investment, Visakhapaturam, NH-16',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
