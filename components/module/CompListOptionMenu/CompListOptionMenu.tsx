import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority'
import Link from 'next/link'
import React, { HTMLAttributes } from 'react'
import { ISearchParams } from '../CompListSection/CompList/CompList';

export const CompListOptionMenuVariants = cva(
  `flex items-center justify-center text-body-2`,
  {
    variants: {
      variant: {
        circle:'',
        round:`whitespace-nowrap rounded-[99px] bg-gray-20 px-[12px] py-[6px] text-gray-80`,
        underBar:`h-[32px] flex-1  `,
      },
      selected: {
        'true': 'text-primary-60'
      },
      
    },compoundVariants: [{
      variant: 'round',
      selected: true,
      class: 'border-b-[2px] border-primary-60 '
    },{ variant: 'round',
    selected: true,
    class: 'bg-primary-10'}]
  }
)

interface CompListOptionMenuProps extends HTMLAttributes<HTMLElement>,
VariantProps<typeof CompListOptionMenuVariants> {
  options:any;
  pathName:string;
  query:any;
  title:string;
  searchParams?: ISearchParams
}


const CompListOptionMenu = ({options,pathName,variant,searchParams}:CompListOptionMenuProps) => {

  const isSelected = variant === 'round' ? gender === option.gender && type === option.type : compStatus === option.title;

  return (
    {options.map((option:any, index:any) => (
        <Link
          href={{ pathname: pathName, query: {
            ...searchParams,
            title: option.title,
            gender: option.gender,
            type: option.type,
          } }}
          className={cn(CompListOptionMenuVariants({variant, selected: isSelected ? 'true' : 'false'}))}
          key={index}
          replace
        >
          {option.title}
        </Link>
      ))}
  )
}

export default CompListOptionMenu