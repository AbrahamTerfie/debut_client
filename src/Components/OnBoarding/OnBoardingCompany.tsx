import React, { useState, useEffect } from 'react'
import { Row, Col, Input, FormGroup, Label } from 'reactstrap'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { IoIosAdd, IoMdTrash } from 'react-icons/io'
import MotionContainer from '../MotionContainer/MotionContainer';
import { aeraOfExpertise, regions } from '../../Constants/index';

interface OnBoardingCompanyProps {
  companyName: string,
  companyWebsite: string,
  companyHeadquarters: string,
  companyDescription: string,
  majorAchivements: string[],
  companyServivesGeography: string[],
  aeraOfOperation: string[],
  companyLogo: string,
}

export default function OnBoardingCompany({ onBoardingCompanyform, setOnBoardingCompanyform,
  imageSelected, setImageSelected }: {
    onBoardingCompanyform: OnBoardingCompanyProps,
    setOnBoardingCompanyform: React.Dispatch<React.SetStateAction<OnBoardingCompanyProps>>,
    imageSelected: any
    setImageSelected: any
  }

) {
  const animatedComponents = makeAnimated();
  console.log("onBoardingCompanyform", onBoardingCompanyform)

  const [imagePreview, setImagePreview] = useState<string>('')

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
    setOnBoardingCompanyform({
      ...onBoardingCompanyform, majorAchivements: [...onBoardingCompanyform.majorAchivements, achivement]
    })
    setAchivement('')
  }
  const removeAchievement = (index: number) => {
    setOnBoardingCompanyform({
      ...onBoardingCompanyform, majorAchivements: onBoardingCompanyform.majorAchivements?.filter((item, i) => i !== index)
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
            value={onBoardingCompanyform?.companyName}
            onChange={onChangeHandler} />
        </FormGroup>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6} >
        <FormGroup>
          <Label for="companyWebsite">Company Website</Label>
          <Input type="text" name="companyWebsite"
            id="companyWebsite"
            value={onBoardingCompanyform?.companyWebsite}
            placeholder="Company Website"
            onChange={onChangeHandler} />
        </FormGroup>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6} >
        <FormGroup>
          <Label for="companyHeadquarters">Company Location</Label>
          <Input type="text" name="companyHeadquarters"
            id="companyHeadquarters"
            placeholder="Company Location"
            value={onBoardingCompanyform?.companyHeadquarters}
            onChange={onChangeHandler} />
        </FormGroup>
      </Col>
      <Col sm={12} md={6} lg={6} xl={6} >
        <FormGroup>
          <Label for="companyDescription">Description Of Company</Label>
          <Input type="textarea" name="companyDescription"
            id="companyDescription"
            value={onBoardingCompanyform?.companyDescription}
            placeholder="Description Of Company"
            onChange={onChangeHandler} />
        </FormGroup>
      </Col>

      <Col sm={12} md={12} lg={12} xl={12}
        className="d-flex justify-content-around align-items-end">
        <FormGroup className='w-100'>
          <Label for="majorAchivements">Major Achivements</Label>
          <div className="d-flex flex-row justify-content-start align-items-start flex-wrap my-2">
            {onBoardingCompanyform?.majorAchivements.map((item, index) => (
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
        <Label for="aeraOfOperation">aera of operation </Label>
        <Select
          name='aeraOfOperation'
          onChange={(e: any) => selectHandler(e, 'aeraOfOperation')}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          defaultValue={aeraOfExpertise?.filter((item: any) => onBoardingCompanyform.aeraOfOperation.includes(item.value))}
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
        <Label for="companyServivesGeography"> Regions </Label>
        <Select
          name='companyServivesGeography'
          onChange={(e: any) => selectHandler(e, 'companyServivesGeography')}
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={regions?.filter((item: any) => onBoardingCompanyform.companyServivesGeography.includes(item.value))}
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
        {/* {imagePreview && */}
        <img src={
          !imagePreview ? onBoardingCompanyform?.companyLogo : imagePreview ? imagePreview : onBoardingCompanyform?.companyLogo
        } alt="company logo"
          className=" rounded rounded-2 border border-info-subtle my-2  img-fluid w-50 h-50" />
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
