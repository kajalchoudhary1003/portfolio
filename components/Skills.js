import React from 'react'
import { Badge } from './ui/badge'
import { Rampart_One } from 'next/font/google'
import './../app/globals.css'

const ram = Rampart_One({
    weight: '400',
    subsets: ['latin']
    
})

const skills = [
    'JavaScript',
    'ReactJs',
    'NextJs',
    'NodeJs',
    'ExpressJs',
    'MongoDB',
    'MySQL',
    'HTML',
    'CSS',
    'Python',
    'Flask',
    'Swift',
    'Kotlin',
    'Android Studio',
    'Xcode',
    'Git',
    'GitHub',
    'VS Code',
    'C++',
    

]

const colors = [
    'bg-pink-500', 'bg-violet-500', 'bg-cyan-500'
]

const Skills = () => {
  return (
    <div className='bg-primary py-4 '>
    <h1 className={`${ram.className} uppercase text-center text-4xl text-light movingHeading`}>Skills</h1>
    <div className='flex flex-wrap gap-4 justify-center px-10 py-4'>
{
    skills.map((skill, index) => (
        <Badge key={index} className={`skill-badge ${colors[index % colors.length]} text-light text-lg`}>{skill}</Badge>
    ))
}
    </div>
    </div>
  )
}

export default Skills