import React, { useState, useEffect } from 'react'
import { Row, Col, Input, FormGroup, Label } from 'reactstrap'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { IoIosAdd, IoMdTrash } from 'react-icons/io'
import MotionContainer from '../MotionContainer/MotionContainer';
import { aeraOfExpertise, regions } from '../../Constants/index';

export default function OnBoardingCompany() {
  const animatedComponents = makeAnimated();
  const [imageSelected, setImageSelected] = useState<any>()
  const [imagePreview, setImagePreview] = useState<string>('')
  const [onBoardingCompanyform, setOnBoardingCompanyform] = useState({
    companyName: '',
    companyWebsite: '',
    companyLocation: '',
    descriptionOfCompany: '',
    // majorAchivements: string[],
    majorAchivements: [] as string[],
    companyRegion: [] as string[],
    aeraOfOperation: [] as string[],
    companyLogo: '',

  })
  const [achivement, setAchivement] = useState('')

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOnBoardingCompanyform({
      ...onBoardingCompanyform, [e.target.name]: e.target.value
    })
  }
  const selectHandler = (e: any, name: string) => {
    setOnBoardingCompanyform({
      ...onBoardingCompanyform, [name]: e.map((item: any) => item.value)
    })
  }
  const addAchievement = () => {
    // push achivement to majorAchivements array in onBoardingCompanyform
    setOnBoardingCompanyform({
      ...onBoardingCompanyform, majorAchivements: [...onBoardingCompanyform.majorAchivements, achivement]
    })
    // clear achivement input
    setAchivement('')
  }
  const removeAchievement = (index: number) => {
    // remove achivement from majorAchivements array in onBoardingCompanyform
    setOnBoardingCompanyform({
      ...onBoardingCompanyform, majorAchivements: onBoardingCompanyform.majorAchivements.filter((item, i) => i !== index)
    })

  }
  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => setImagePreview(reader.result as string))
      reader.readAsDataURL(e.target.files[0])
      setImageSelected(e.target.files[0])
    }
  }
  return (
    <Row>
      <Col sm={12} md={6} lg={6} xl={6} >
        <FormGroup>
          <Label for="companyName">Company Name</Label>
          <Input type="text" name="companyName"
            id="companyName"
            placeholder="Company Name"
            onChange={onChangeHandler} />
        </FormGroup>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6} >
        <FormGroup>
          <Label for="companyWebsite">Company Website</Label>
          <Input type="text" name="companyWebsite"
            id="companyWebsite"
            placeholder="Company Website"
            onChange={onChangeHandler} />
        </FormGroup>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6} >
        <FormGroup>
          <Label for="companyLocation">Company Location</Label>
          <Input type="text" name="companyLocation"
            id="companyLocation"
            placeholder="Company Location"
            onChange={onChangeHandler} />
        </FormGroup>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6} >
        <FormGroup>
          <Label for="descriptionOfCompany">Description Of Company</Label>
          <Input type="textarea" name="descriptionOfCompany"
            id="descriptionOfCompany"
            placeholder="Description Of Company"
            onChange={onChangeHandler} />
        </FormGroup>
      </Col>

      <Col sm={12} md={12} lg={12} xl={12}
        className="d-flex justify-content-around align-items-end">
        <FormGroup className='w-100'>
          <Label for="majorAchivements">Major Achivements</Label>
          <div className="d-flex flex-row justify-content-start align-items-start flex-wrap my-2">
            {onBoardingCompanyform.majorAchivements.map((item, index) => (
              <div key={index} className="d-flex flex-row justify-content-center align-items-center  text-info-emphasis bg-info-subtle border border-info-subtle m-2 px-3 py-1 rounded rounded-2 ">
                <span >{item}</span>
                <MotionContainer>
                  <IoMdTrash
                    onClick={() => removeAchievement(index)}
                    size={20} className="cursor-pointer text-danger-emphasis  rounded rounded-pill ms-3 " />
                </MotionContainer>
              </div>
            ))}
          </div>
          <Input type="text" name="majorAchivements"
            id="majorAchivements"
            placeholder="Major Achivements"
            value={achivement}
            onChange={(e) => setAchivement(e.target.value)} />
        </FormGroup>
        <MotionContainer>
          <IoIosAdd size={40} onClick={addAchievement}
            className="cursor-pointer text-success-emphasis bg-success-subtle border border-success-subtle rounded rounded-pill m-3 mt-4"
          />
        </MotionContainer>
      </Col>
      <Col m={12} md={12} lg={12} xl={12} className='my-2'>
        <Label for="aeraOfExpertise">aera of expertise </Label>
        <Select
          name='aeraOfExpertise'
          onChange={(e: any) => selectHandler(e, 'aeraOfExpertise')}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={aeraOfExpertise}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'darkgrey' : 'grey',
              backgroundColor: state.isFocused ? 'darkgrey' : 'grey',
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: 'black',
              color: 'darkgrey',
            })
          }}
        />
      </Col>
      <Col m={12} md={12} lg={12} xl={12} className='my-2'>
        <Label for="regions"> Regions </Label>
        <Select
          name='regions'
          onChange={(e: any) => selectHandler(e, 'regions')}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={regions}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'darkgrey' : 'grey',
              backgroundColor: state.isFocused ? 'darkgrey' : 'grey',
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: 'black',
              color: 'darkgrey',
            })
          }}
        />
      </Col>

      <Col sm={12} md={6} lg={6} xl={6} 
      className="d-flex flex-column my-4">
      
        <Label for="companyLogo">Company Logo</Label>
        {imagePreview &&
          <img src={imagePreview} alt="company logo"
            className=" rounded rounded-2 border border-info-subtle my-2  img-fluid w-50 h-50" />}
        <FormGroup>
          <Input type="file" name="companyLogo"
            id="companyLogo"
            placeholder="Company Logo"
            onChange={onSelectFile} />
        </FormGroup>
      </Col>
    </Row>
  )
}
