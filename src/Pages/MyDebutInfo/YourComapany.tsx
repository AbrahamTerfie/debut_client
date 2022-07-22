import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { MultiSelect } from "react-multi-select-component";
import { optionOfGeography, optionsOfBusinessCategories, optionsOfAeraasOfImpact } from "./selectInputs";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
import { setMyDebutTab } from '../../Store/UI/sidebarController';
import Axios from 'axios';



// debutClient 



export default function YourComapany() {



  const [imageSelected, setImageSelected] = useState("")

  const handleFileSelected = () => {
    const formData = new FormData
    formData.append('file', imageSelected)
    // file is the file object
    // first one is the preset and the second one is name  for cloudnary api
    formData.append('upload_preset', 'debutCompanyProfilePicture')
    Axios.post('https://api.cloudinary.com/v1_1/djpiwnxwl/image/upload', formData)
      .then((response) => {
        console.log(response)
      }
      )


    // console.log(files[0]);

  }
  const { userID } = useSelector((store: RootState) => store.identfiers)
  const dispatch = useDispatch();
  const { myDebutTab } = useSelector((store: RootState) => store.uiStore)


  const [selectedBusinessCategories, setSelectedBusinessCategories] = useState([]);
  const [selectedAeraasOfImpact, setSelectedAeraasOfImpact] = useState([]);
  const [selectedGeography, setSelectedGeography] = useState([]);

  return (
    <Form>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="companyName"> company name </Label>
            <Input type="text"
              name="companyName"
              id="companyName"
              placeholder="Company name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="missionStatement"> company's mission statement </Label>
            <Input type="text"
              name="missionStatement"
              id="missionStatement"
              placeholder=" mission statement" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="headquarters">  Where is the company's primary headquarters located?</Label>
            <Input type="text"
              name="headquarters"
              id="headquarters"
              placeholder="headquarters" />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="pronouns"> upload high resolution image of your logo </Label>
            <Input onChange={(event: any) => {
              setImageSelected(event.target.files[0])


            }} type="file" />
          </FormGroup>

          <Button onClick={handleFileSelected} >
            upload image
          </Button>
        </Col>
        {/* <Col md={6} className='py-4' >
          * current company *
        </Col> */}
        <Col md={3}>
          <FormGroup>
            <Label for="jobBoard"> job board  </Label>
            <Input type="text"
              name="jobBoard"
              id="jobBoard"
              placeholder="Job board " />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="linkedIn"> LinkedIn URL </Label>
            <Input type="text"
              name="linkedIn"
              id="linkedIn"
              placeholder="LinkedIn " />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="twitter"> twitter URL </Label>
            <Input type="text"
              name="twitter"
              id="twitter"
              placeholder="twitter" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="facebook"> facebook URL </Label>
            <Input type="text"
              name="facebook"
              id="facebook"
              placeholder="facebook" />
          </FormGroup>
        </Col>

        <Col md={12}>
          <FormGroup>
            <Label for="achievements" className='mt-3' > major achivements as a company</Label>
            <span className='fs-6 text-muted mx-3' >  points of credibility you'd like to highlight on your company profile  </span>
            <Input className='my-3' type="text" name="achievements" id="achievements" placeholder="achievements .... " />
            <Input className='my-3' type="text" name="achievements" id="achievements" placeholder="achievements .... " />
            <Input className='my-3' type="text" name="achievements" id="achievements" placeholder="achievements .... " />
          </FormGroup>
        </Col>


        <Col md={12}>
          <FormGroup>
            <Label for="comapnyDescription" className='mt-3'>  describr your company </Label>
            <span className='fs-6 text-muted mx-3' >  breifly describe your comapny   </span>
            <Input className='my-3' type="textarea" rows={3} name="comapnyDescription" id="comapnyDescription" placeholder=" company description " />
          </FormGroup>
        </Col>

        <Col md={12} className="my-3" >
          <Label for="yourContribution ">
            select geographical regions that you would like to be involved in or have experience in
          </Label>

          <MultiSelect
            hasSelectAll={false}
            options={optionsOfAeraasOfImpact}
            value={selectedAeraasOfImpact}
            onChange={setSelectedAeraasOfImpact}
            labelledBy="Select your geographical region"
          />
        </Col>

        <Col md={12} className="my-3" >
          <Label for="yourContribution ">
            select geographical regions that you would like to be involved in or have experience in
          </Label>

          <MultiSelect
            hasSelectAll={false}
            options={optionOfGeography}
            value={selectedGeography}
            onChange={setSelectedGeography}
            labelledBy="Select your geographical region"
          />
        </Col>


        <Col md={12} className="my-3" >
          <Label for="yourContribution ">
            select geographical regions that you would like to be involved in or have experience in
          </Label>

          <MultiSelect
            hasSelectAll={false}
            options={optionsOfBusinessCategories}
            value={selectedBusinessCategories}
            onChange={setSelectedBusinessCategories}
            labelledBy="Select your geographical region"
          />
        </Col>
      </Row>


      <Row>
        <Col md={3}>
          <Button className='my-4 py-2 w-100 mx-2' outline color="warning"
            onClick={() => { dispatch(setMyDebutTab('3')) }}>
            previous
          </Button>
        </Col>
        <Col md={9}>
          <Button className='my-4 py-2 w-100' outline color="success"
            onClick={() => { dispatch(setMyDebutTab('5')) }}>
            Save and continue
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
