let main = document.body

let container = document.createElement('div')
container.setAttribute('class', 'container')




let header_div = document.createElement('div')
header_div.setAttribute('class', 'header1')

let image_div = document.createElement('div')
image_div.setAttribute('class', 'header2')

let profile_pic = document.createElement('img')
profile_pic.setAttribute('src', 'profile.jpg')
profile_pic.setAttribute('class', 'profile-img')

let header_bar = document.createElement('div')
header_bar.setAttribute('class', 'header3')

let header_name = document.createElement('h1')
header_name.setAttribute('class', 'profile-name')
header_name.innerText = "Kavinsurya"


image_div.appendChild(profile_pic)
header_div.appendChild(image_div)
header_div.appendChild(header_bar)
header_div.appendChild(header_name)
container.appendChild(header_div)

let address_div = document.createElement('div')
address_div.setAttribute('class', '  profile-info')
address_div.innerText = "CONTACT Phone:+91-9790234646 email:kavinsurya002@gmail.com"

container.appendChild(address_div)


let main_div = document.createElement('div')
main_div.setAttribute('class', 'block')



let first_column = document.createElement('div')
first_column.setAttribute('class', 'left-p')

let profile = document.createElement('div')
profile.setAttribute('style', '')


let profile_span = document.createElement('span')
let profile_icon = document.createElement('img')
profile_icon.setAttribute('src', '1.svg')
profile_icon.setAttribute('style', 'icon')

profile_span.appendChild(profile_icon)

let profile_header = document.createElement('span')
profile_header.setAttribute('class', 'header4')
profile_header.innerText = "Profile"


let profile_content = document.createElement('p')
profile_content.setAttribute('class', 'profile1-info')
profile_content.innerText = " Being a Electronics Engineering student involves identifying a problem and coming up with a technological solution to address it. I love to try to catch the ability to solve complex problems in a logical way. Since coming up with a solution of a problemis never a straightforward process, out of the box thinking is often required in order to ensure delivering the most innovative and effective solutions."

profile.appendChild(profile_span)
profile.appendChild(profile_header)
profile.appendChild(profile_content)

let skills = document.createElement('div')
skills.setAttribute('style', '')


let skills_span = document.createElement('span')
let skills_icon = document.createElement('img')
skills_icon.setAttribute('src', '2.svg')
skills_icon.setAttribute('style', 'icon')

skills_span.appendChild(skills_icon)


let skills_header = document.createElement('span')
skills_header.setAttribute('class', 'header4')
skills_header.innerText = "Skills"


let skills_skill_header = document.createElement('p')
skills_skill_header.innerText = "Technical Skills"
skills_skill_header.setAttribute('class', 'header4')


let skill_1 = document.createElement('ul')

let skill_1_name = document.createElement('li')
skill_1_name.innerText = "HTML"

let skill_2_name = document.createElement('li')
skill_2_name.innerText = "CSS"

let skill_3_name = document.createElement('li')
skill_3_name.innerText = "Javascript"

let skill_4_name = document.createElement('li')
skill_4_name.innerText = "PHP"

let skill_5_name = document.createElement('li')
skill_5_name.innerText = "Wordpress"


let skill_6_name = document.createElement('li')
skill_6_name.innerText = "MYSQL"


skill_1.appendChild(skill_1_name)
skill_1.appendChild(skill_2_name)
skill_1.appendChild(skill_3_name)
skill_1.appendChild(skill_4_name)
skill_1.appendChild(skill_5_name)
skill_1.appendChild(skill_6_name)


skills.appendChild(skills_icon)
skills.appendChild(skills_header)
skills.appendChild(skills_skill_header)
skills.appendChild(skill_1)


let skills_Additional_header = document.createElement('p')
skills_Additional_header.innerText = "Additional Skills"
skills_Additional_header.setAttribute('class', 'header4')


let Additional_1 = document.createElement('ul')

let Additional_1_name = document.createElement('li')
Additional_1_name.innerText = "Active listening"

let Additional_2_name = document.createElement('li')
Additional_2_name.innerText = "Management skills"

let Additional_3_name = document.createElement('li')
Additional_3_name.innerText = "Interpersonal skills"



Additional_1.appendChild(Additional_1_name)
Additional_1.appendChild(Additional_2_name)
Additional_1.appendChild(Additional_3_name)

skills.appendChild(skills_Additional_header)
skills.appendChild(Additional_1)

first_column.appendChild(profile)
first_column.appendChild(skills)



let second_column = document.createElement('div')
second_column.setAttribute('class', 'right-p')


let edu = document.createElement('div')



let edu_span = document.createElement('span')
let edu_icon = document.createElement('img')
edu_icon.setAttribute('src', '2.svg')
edu_icon.setAttribute('style', 'icon')

edu_span.appendChild(edu_icon)


let edu_header = document.createElement('span')
edu_header.setAttribute('class', 'header4')
edu_header.innerText = "Education"

let edu_content = document.createElement('ul')

let edu_name1 = document.createElement('li')
edu_name1.innerText = "Sri Lathangi Vidhya Mandir Matriculation School Degree NameSecondary School Certificate Grade:10th"


let edu_name2 = document.createElement('li')
edu_name2.innerText = "VEVEAHAM BOYS HIGHER SECONDARY SCHOOL Degree NameHigher Secondary Certificate Field Of StudyBio/MathsGrade:12th"

let edu_name3 = document.createElement('li')
edu_name3.innerText = "Dr.Mahalingam College of Engineering and Technology Degree NameBE - Bachelor of EngineeringField Of StudyElectrical, Electronics and Communications Engineering"


edu_content.appendChild(edu_name1)
edu_content.appendChild(edu_name2)
edu_content.appendChild(edu_name3)


edu.appendChild(edu_span)
edu.appendChild(edu_header)
edu.appendChild(edu_content)


let work = document.createElement('div')

let work_span = document.createElement('span')
let work_icon = document.createElement('img')
work_icon.setAttribute('src', '3.svg')
work_icon.setAttribute('style', 'icon')

work_span.appendChild(work_icon)


let work_header = document.createElement('span')
work_header.setAttribute('class', 'header4')
work_header.innerText = "Work Experience"

let work_content = document.createElement('ul')

let name = document.createElement('li')
name.innerText = "Software developement Trainee Company NameIronMan Technology & Consultants Internship Jan 2020 – june 2020Location:Pollachi, Tamil Nadu, India"

work_content.appendChild(name)



work.appendChild(work_span)
work.appendChild(work_header)
work.appendChild(work_content)



second_column.append(edu, work)



main_div.appendChild(first_column)
main_div.appendChild(second_column)

container.appendChild(main_div)



main.appendChild(container)