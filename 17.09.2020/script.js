let main = document.body

let container = document.createElement('div')
container.setAttribute('style', 'width: 75%;min-height: 1000px;background-color: rgb(249, 251, 255);margin: auto;')


let header_div = document.createElement('div')
header_div.setAttribute('style', 'height:400px;width:100%;background-color:grey;align-content:center;')

let image_div = document.createElement('div')
image_div.setAttribute('style', 'width:190px;height:190px;position:relative;left:410px;top:150px;')

let profile_pic = document.createElement('img')
profile_pic.setAttribute('src', 'profile.jpg')
profile_pic.setAttribute('style', ' width: 150px;height: 150px;border-radius: 50%;position: absolute;top: 100px;border: 3px dashed orange;left: 75%;transform: translate(-50%, -50%);')

let header_bar = document.createElement('div')
header_bar.setAttribute('style', 'background-color:white;height:45px;position:relative;top:130px;')

let header_name = document.createElement('div')
header_name.setAttribute('style', '   width: 300px;height: 50px;background-color: orange;text-align: center;padding: 15px 10px 10px 10px;position: absolute;top: 350px;left: 50%;transform: translate(-50%, -50%);border-radius: 5px;font-size:xx-large')
header_name.innerText = "Kavinsurya"


image_div.appendChild(profile_pic)
header_div.appendChild(image_div)
header_div.appendChild(header_bar)
header_div.appendChild(header_name)
container.appendChild(header_div)

let address_div = document.createElement('div')
address_div.setAttribute('style', '   text-align: center;font-size: 20px;font-family: IBM Plex Mono , monospace;font-weight: bolder;padding: 2px;border-bottom:2px solid black')
address_div.innerText = "CONTACT Phone:+91-9790234646 email:kavinsurya002@gmail.com"

container.appendChild(address_div)


let main_div = document.createElement('div')
main_div.setAttribute('style', 'display:flex;margin-top:15px;height:600px;')



let first_column = document.createElement('div')
first_column.setAttribute('style', 'flex:50%;border-right:2px solid black;')

let profile = document.createElement('div')
profile.setAttribute('style', '')


let profile_span = document.createElement('span')
let profile_icon = document.createElement('img')
profile_icon.setAttribute('src', '1.svg')
profile_icon.setAttribute('style', 'width:50px;height:50px;margin-left:10px;')

profile_span.appendChild(profile_icon)

let profile_header = document.createElement('span')
profile_header.setAttribute('style', ' padding-left: 20px;color: #225565;font-size:x-large;')
profile_header.innerText = "Profile"


let profile_content = document.createElement('p')
profile_content.setAttribute('style', ' padding: 0px 10px 10px 10px;font-size: large;font-family: Kumbh Sans, sans-serif;line-height:1.2')
profile_content.innerText = " Being a Electronics Engineering student involves identifying a problem and coming up with a technological solution to address it. I love to try to catch the ability to solve complex problems in a logical way. Since coming up with a solution of a problemis never a straightforward process, out of the box thinking is often required in order to ensure delivering the most innovative and effective solutions."

profile.appendChild(profile_span)
profile.appendChild(profile_header)
profile.appendChild(profile_content)

let skills = document.createElement('div')
skills.setAttribute('style', '')


let skills_span = document.createElement('span')
let skills_icon = document.createElement('img')
skills_icon.setAttribute('src', '2.svg')
skills_icon.setAttribute('style', 'width:50px;height:50px;margin-left:10px;')

skills_span.appendChild(skills_icon)


let skills_header = document.createElement('span')
skills_header.setAttribute('style', 'padding-left: 10px;color: #225565;font-size:x-large;')
skills_header.innerText = "Skills"


let skills_skill_header = document.createElement('p')
skills_skill_header.innerText = "Technical Skills"
skills_skill_header.setAttribute('style', 'padding-left: 10px;color: #225565;font-size:large;')


let skill_1 = document.createElement('ul')

let skill_1_name = document.createElement('li')
skill_1_name.innerText = "HTML"
skill_1_name.setAttribute('style', 'padding-left:20px')

let skill_2_name = document.createElement('li')
skill_2_name.innerText = "CSS"
skill_2_name.setAttribute('style', 'padding-left:20px')

let skill_3_name = document.createElement('li')
skill_3_name.innerText = "Javascript"
skill_3_name.setAttribute('style', 'padding-left:20px')

let skill_4_name = document.createElement('li')
skill_4_name.innerText = "PHP"
skill_4_name.setAttribute('style', 'padding-left:20px')


let skill_5_name = document.createElement('li')
skill_5_name.innerText = "Wordpress"
skill_5_name.setAttribute('style', 'padding-left:20px')


let skill_6_name = document.createElement('li')
skill_6_name.innerText = "MYSQL"
skill_6_name.setAttribute('style', 'padding-left:20px')



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
skills_Additional_header.setAttribute('style', 'padding-left: 10px;color: #225565;font-size:large;')


let Additional_1 = document.createElement('ul')

let Additional_1_name = document.createElement('li')
Additional_1_name.innerText = "Active listening"
Additional_1_name.setAttribute('style', 'padding-left:20px')

let Additional_2_name = document.createElement('li')
Additional_2_name.innerText = "Management skills"
Additional_2_name.setAttribute('style', 'padding-left:20px')

let Additional_3_name = document.createElement('li')
Additional_3_name.innerText = "Interpersonal skills"
Additional_3_name.setAttribute('style', 'padding-left:20px')


Additional_1.appendChild(Additional_1_name)
Additional_1.appendChild(Additional_2_name)
Additional_1.appendChild(Additional_3_name)

skills.appendChild(skills_Additional_header)
skills.appendChild(Additional_1)

first_column.appendChild(profile)
first_column.appendChild(skills)



let second_column = document.createElement('div')
second_column.setAttribute('style', 'flex:50%;')


let edu = document.createElement('div')



let edu_span = document.createElement('span')
let edu_icon = document.createElement('img')
edu_icon.setAttribute('src', '2.svg')
edu_icon.setAttribute('style', 'width:50px;height:50px;margin-left:10px;')

edu_span.appendChild(edu_icon)


let edu_header = document.createElement('span')
edu_header.setAttribute('style', 'padding-left: 10px;color: #225565;font-size:x-large;')
edu_header.innerText = "Education"

let edu_content = document.createElement('ul')
edu_content.setAttribute('style', 'line-height:1.5;font-family: Kumbh Sans, sans-serif;  ')


let edu_name1 = document.createElement('li')
edu_name1.innerText = "Sri Lathangi Vidhya Mandir Matriculation School Degree NameSecondary School Certificate Grade:10th"
edu_name1.setAttribute('style', 'padding-left:20px;')


let edu_name2 = document.createElement('li')
edu_name2.innerText = "VEVEAHAM BOYS HIGHER SECONDARY SCHOOL Degree NameHigher Secondary Certificate Field Of StudyBio/MathsGrade:12th"
edu_name2.setAttribute('style', 'padding-left:20px;')

let edu_name3 = document.createElement('li')
edu_name3.innerText = "Dr.Mahalingam College of Engineering and Technology Degree NameBE - Bachelor of EngineeringField Of StudyElectrical, Electronics and Communications Engineering"
edu_name3.setAttribute('style', 'padding-left:20px;')



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
work_icon.setAttribute('style', 'width:50px;height:50px;margin-left:10px;')

work_span.appendChild(work_icon)


let work_header = document.createElement('span')
work_header.setAttribute('style', 'padding-left: 10px;color: #225565;font-size:x-large;')
work_header.innerText = "Work Experience"

let work_content = document.createElement('ul')
work_content.setAttribute('style', 'line-height:1.5;font-family: Kumbh Sans, sans-serif;  ')

let name = document.createElement('li')
name.innerText = "Software developement Trainee Company NameIronMan Technology & Consultants Internship Jan 2020 – june 2020Location:Pollachi, Tamil Nadu, India"
name.setAttribute('style', 'padding-left:20px;')

work_content.appendChild(name)



work.appendChild(work_span)
work.appendChild(work_header)
work.appendChild(work_content)



second_column.append(edu, work)



main_div.appendChild(first_column)
main_div.appendChild(second_column)

container.appendChild(main_div)




main.appendChild(container)