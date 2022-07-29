import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { MultiSelect } from "react-multi-select-component";
import { optionOfGeography, optionsOfBusinessCategories, optionsOfAeraasOfImpact } from "./selectInputs";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
import { setMyDebutTab } from '../../Store/UI/sidebarController';
import { setCompanyID } from '../../Store/identfiers/identfiers'
import Axios from 'axios';
import { useMutation, useQuery } from '@apollo/client'
import {
  CHECK_IF_USER_HAS_COMPANY, CREATE_COMPANY,
  FETCH_COMPANY, UPDATE_COMPANY
} from '../../GraphQl/index';
import Loader from '../../Components/Loader/Loader';
import { togglehasCompany } from '../../Store/identfiers/identfiers';
import { myComapnyInitialState } from './initSattes';

export default function YourComapany() {
  const dispatch = useDispatch();
  const { companyID, userID, hasCompany } = useSelector((store: RootState) => store.identfiers)
  const [imageSelected, setImageSelected] = useState("")
  const [selectedAeraasOfImpact, setSelectedAeraasOfImpact] = useState([]);
  const [selectedGeography, setSelectedGeography] = useState([]);
  const [isCreatingAcompany, setIsCreatingAcompany] = useState(false)
  const [achivement, setAchivement] = useState('');
  const { data, loading, error } = useQuery(CHECK_IF_USER_HAS_COMPANY, {
    variables: { userId: userID }
  })
  const [companyState, setCompanyState] = useState(myComapnyInitialState)


  console.log({
    ...companyState,
    companyServivesGeography: selectedGeography.map((geography: any) => geography.value),
    aeraOfOperation: selectedAeraasOfImpact.map((aera: any) => aera.value),
  })

  const { data: dataCompany, loading: loadingCompany, error: errorCompany
  } = useQuery(FETCH_COMPANY, {
    variables: { userId: userID }
  })


  const [createMyCompany, createMyCompanyRes] = useMutation(CREATE_COMPANY, {
    update(cache, { data: { createDebutCompany } }) {
      const { getCompany }: any = cache.readQuery({
        query: FETCH_COMPANY,
        variables: { userId: userID }
      })
      cache.writeQuery({
        query: FETCH_COMPANY,
        variables: { userId: userID },
        data: { getCompany: createDebutCompany }
      })
    }
  })

  const [updateMyCompany, updateMyCompanyRes] = useMutation(UPDATE_COMPANY, {
    update(cache, { data: { updateDebutCompany } }) {
      const { getCompany }: any = cache.readQuery({
        query: FETCH_COMPANY,
        variables: { userId: userID }
      })
      cache.writeQuery({
        query: FETCH_COMPANY,
        variables: { userId: userID },
        data: { getCompany: updateDebutCompany }
      })
    }
  })


  useEffect(() => {
    if (dataCompany) {
      setCompanyState({
        // ...companyState,
        companyName: dataCompany.getCompanyWithUserId.companyName === null ? '' : dataCompany.getCompanyWithUserId.companyName,
        companyMissionStatement: dataCompany.getCompanyWithUserId.companyMissionStatement === null ? '' : dataCompany.getCompanyWithUserId.companyMissionStatement,
        companyHeadquarters: dataCompany.getCompanyWithUserId.companyHeadquarters === null ? '' : dataCompany.getCompanyWithUserId.companyHeadquarters,
        companyWebsite: dataCompany.getCompanyWithUserId.companyWebsite === null ? '' : dataCompany.getCompanyWithUserId.companyWebsite,
        companyLogo: dataCompany.getCompanyWithUserId.companyLogo === null ? '' : dataCompany.getCompanyWithUserId.companyLogo,
        jobBoard: dataCompany.getCompanyWithUserId.jobBoard === null ? '' : dataCompany.getCompanyWithUserId.jobBoard,
        linkedInUrl: dataCompany.getCompanyWithUserId.linkedInUrl === null ? '' : dataCompany.getCompanyWithUserId.linkedInUrl,
        twitterUrl: dataCompany.getCompanyWithUserId.twitterUrl === null ? '' : dataCompany.getCompanyWithUserId.twitterUrl,
        facebookUrl: dataCompany.getCompanyWithUserId.facebookUrl === null ? '' : dataCompany.getCompanyWithUserId.facebookUrl,
        instagramUrl: dataCompany.getCompanyWithUserId.instagramUrl === null ? '' : dataCompany.getCompanyWithUserId.instagramUrl,
        majorAchivements: dataCompany.getCompanyWithUserId.majorAchivements === null ? [] : dataCompany.getCompanyWithUserId.majorAchivements,
        companyDescription: dataCompany.getCompanyWithUserId.companyDescription === null ? '' : dataCompany.getCompanyWithUserId.companyDescription,
      })

      dispatch(setCompanyID(dataCompany.getCompanyWithUserId._id))
    }
  }, [dataCompany])



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyState({ ...companyState, [name]: value })
  }

  // console.log("loadingCompany", loadingCompany)
  // console.log("errorCompany", errorCompany)


  const handleFileSelected = () => {
    const formData = new FormData
    formData.append('file', imageSelected)
    // file is the file object
    // first one is the preset and the second one is name  for cloudnary api
    formData.append('upload_preset', 'debutCompanyProfilePicture')
    Axios.post('https://api.cloudinary.com/v1_1/djpiwnxwl/image/upload', formData)
      .then((response) => {
        setCompanyState({ ...companyState, companyLogo: response.data.secure_url })
      })
      .catch((error) => {
        console.log(error)
      })


  }


  //add to majot achivement to company
  const addToMajorAchovements = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setCompanyState({ ...companyState, majorAchivements: [...companyState.majorAchivements, achivement] })
    setAchivement('')
  }

  if (createMyCompanyRes.error || updateMyCompanyRes.error) {
    console.log(createMyCompanyRes.error)
    console.log(updateMyCompanyRes.error)
  }

  const handleCompanySubimt = () => {
    //check if company is being created or updated 

    if (isCreatingAcompany) {
      imageSelected && handleFileSelected()
      createMyCompany({
        variables: {
          companyInput: {
            ...companyState,
            companyOwner: userID,
            companyCategory: selectedGeography.map((geography: any) => geography.value),
            aeraOfOperation: selectedAeraasOfImpact.map((aera: any) => aera.value),

          }
        }
      })
      if (createMyCompanyRes.data) {
        console.log("createMyCompanyRes.data", createMyCompanyRes.data)
        setIsCreatingAcompany(false)
        setCompanyState(myComapnyInitialState)
        // dispatch(setMyDebutTab('5'))

      }
    }
    //if being created call create mutation 
    //check if image is being uploaded or not

    //if being updated call update mutation
    //check if image is being uploaded or not
    else if (hasCompany) {
      imageSelected && handleFileSelected()
      updateMyCompany({
        variables: {
          updateDebutCompanyId: companyID,
          companyInput: {
            ...companyState,
            companyCategory: selectedGeography.map((geography: any) => geography.value),
            aeraOfOperation: selectedAeraasOfImpact.map((aera: any) => aera.value),
          },

        }
      })
      if (updateMyCompanyRes.data) {
        console.log("updateMyCompanyRes.data", updateMyCompanyRes.data)
        setCompanyState(myComapnyInitialState)
        setIsCreatingAcompany(false)
        // dispatch(setMyDebutTab('5'))
      }
      //dispatch to the next tab


    }
  }



  if (loading) {
    return <Loader />
  }
  if (error) {
    console.log(error)
    // return <div> something went wrong  </div>
  }
  if (data) {
    dispatch(togglehasCompany(data.checkIfUserHasCompany))
  }



  return (
    <>
      {!hasCompany && !isCreatingAcompany ?

        <Row>
          <p className='m-5 text-muted fs-2 fw-light text-center'  >
            you haven't registerd a company yet
          </p>
          <Button
            size='md'
            outline
            color='light'
            className='m-5 w-50 mx-auto shadow'
            onClick={() => setIsCreatingAcompany(true)}
          >
            Start registering a company
          </Button>
        </Row>
        :
        <Form>
          <Row form>
            <Col md={7}>
              <FormGroup>
                <Label for="companyName"> company name </Label>
                <Input type="text"
                  name="companyName"
                  id="companyName"
                  placeholder={companyState.companyName}
                  onChange={handleChange}
                  value={companyState.companyName}

                />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="companyWebsite"> company website </Label>
                <Input type="text"
                  name="companyWebsite"
                  id="companyWebsite"
                  placeholder={companyState.companyWebsite}
                  onChange={handleChange}
                  value={companyState.companyWebsite}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="companyMissionStatement"> company's mission statement </Label>
                <Input type="text"
                  name="companyMissionStatement"
                  id="companyMissionStatement"
                  placeholder={companyState.companyMissionStatement}
                  onChange={handleChange}
                  value={companyState.companyMissionStatement}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="companyHeadquarters">  Where is the company's primary headquarters located?</Label>
                <Input type="text"
                  name="companyHeadquarters"
                  id="companyHeadquarters"
                  placeholder={companyState.companyHeadquarters}
                  onChange={handleChange}
                  value={companyState.companyHeadquarters}

                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="companyLogo"> upload high resolution image of your logo </Label>
                <Input onChange={(event: any) => {
                  setImageSelected(event.target.files[0])
                }} type="file" />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="jobBoard"> job board  </Label>
                <Input type="text"
                  name="jobBoard"
                  id="jobBoard"
                  placeholder={companyState.jobBoard}
                  onChange={handleChange}
                  value={companyState.jobBoard}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="linkedInUrl"> LinkedIn URL </Label>
                <Input type="text"
                  name="linkedInUrl"
                  id="linkedInUrl"
                  placeholder={companyState.linkedInUrl}
                  onChange={handleChange}
                  value={companyState.linkedInUrl} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="twitterUrl"> twitter URL </Label>
                <Input type="text"
                  name="twitterUrl"
                  id="twitterUrl"
                  placeholder={companyState.twitterUrl}
                  onChange={handleChange}
                  value={companyState.twitterUrl} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="facebookUrl"> facebook URL </Label>
                <Input type="text"
                  name="facebookUrl"
                  id="facebookUrl"
                  placeholder={companyState.facebookUrl}
                  onChange={handleChange}
                  value={companyState.facebookUrl} />

              </FormGroup>
            </Col>

            <Col md={12}>
              <FormGroup>
                <Label for="achievements" className='mt-3' > major achivements as a company</Label>
                <span className='fs-6 text-muted mx-3' >  points of credibility you'd like to highlight on your company profile  </span>

                {companyState.majorAchivements.map((savedAchivement: String, index: any) => {
                  return <p className='fs-6 w-100  py-3 px-3  border border-success rounded-3 border-opacity-10' key={index}  >
                    {savedAchivement}
                    <Button color='link' className='text-danger p-1  mx-2 text-end '
                      onClick={() => {
                        let newAchivements = companyState.majorAchivements
                        newAchivements.splice(index, 1)
                        setCompanyState({ ...companyState, majorAchivements: newAchivements })
                      }}
                    >  remove </Button>
                  </p>
                })}
                <Input className='my-3'
                  type="text"
                  name="achievements" id="achievements"
                  placeholder="achievements .... "
                  onChange={(e) => setAchivement(e.target.value)}
                // onChange={ }
                />
                <Button
                  color='success'
                  size='sm'
                  outline
                  onClick={(e: any) => addToMajorAchovements(e)}

                >
                  add achivements
                </Button>

              </FormGroup>
            </Col>


            <Col md={12}>
              <FormGroup>
                <Label for="comapnyDescription" className='mt-3'>  describr your company </Label>
                <span className='fs-6 text-muted mx-3' >  breifly describe your comapny   </span>
                <Input className='my-3' type="textarea" rows={3}
                  name="companyDescription"
                  id="companyDescription"
                  placeholder={companyState.companyDescription}
                  onChange={handleChange}
                  value={companyState.companyDescription} />
              </FormGroup>
            </Col>

            <Col md={12} className="my-3" >
              <Label for="geographicalRegion ">
                aera of operations
              </Label>

              <div className='d-flex' >
                {dataCompany && dataCompany.getCompanyWithUserId.companyCategory.map((savedRegion: String, index: any) => {
                  return (<p key={index} className='fs-6 text-muted fw-light px-1 py-2'>{savedRegion}, </p>)
                })}
              </div>

              <MultiSelect
                hasSelectAll={false}
                options={optionsOfAeraasOfImpact}
                value={selectedAeraasOfImpact}
                onChange={setSelectedAeraasOfImpact}
                labelledBy="Select your geographical region"
              />
            </Col>

            <Col md={12} className="my-3" >
              <Label for="aera of operations">
                select geographical regions that you would like to be involved in or have experience in

              </Label>


              <div className='d-flex' >
                {dataCompany && dataCompany.getCompanyWithUserId.aeraOfOperation.map((aera: String, index: any) => {
                  return (<p key={index} className='fs-7 text-muted fw-light px-1 py-2'>{aera}, </p>)
                })}
              </div>
              <MultiSelect
                hasSelectAll={false}
                options={optionOfGeography}
                value={selectedGeography}
                onChange={setSelectedGeography}
                labelledBy="Select your aera of operaitons"
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
                onClick={handleCompanySubimt}>
                Save 
              </Button>
            </Col>
          </Row>
        </Form>

      }
    </>
  );
}
