import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { MultiSelect } from "react-multi-select-component";
import { optionOfGeography, optionsOfAeraasOfImpact } from "../../MyDebutInfo/selectInputs";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
// import { setMyDebutTab } from '../../../Store/UI/sidebarController';
import { setCompanyID } from '../../../Store/identfiers/identfiers'
import Axios from 'axios';
import { useMutation, useQuery } from '@apollo/client'
import {
  CHECK_IF_USER_HAS_COMPANY, CREATE_COMPANY,
  FETCH_COMPANY, UPDATE_COMPANY
} from '../../../GraphQl/index';
import Loader from '../../../Components/Loader/Loader';
import { togglehasCompany } from '../../../Store/identfiers/identfiers';
import { myComapnyInitialState } from '../../MyDebutInfo/initSattes';
import { motion } from 'framer-motion';
import { notifyError, notifySuccess } from '../../../Components/Notification/Toast';



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


  // console.log({
  //   ...companyState,
  //   companyServivesGeography: selectedGeography.map((geography: any) => geography.value),
  //   aeraOfOperation: selectedAeraasOfImpact.map((aera: any) => aera.value),
  // })

  const { data: dataCompany, loading: loadingCompany, error: errorCompany
  } = useQuery(FETCH_COMPANY, {
    variables: { userId: userID }
  })


  const [createMyCompany, createMyCompanyRes] = useMutation(CREATE_COMPANY, {
    refetchQueries: [{ query: FETCH_COMPANY, variables: { userId: userID } }],
    onCompleted: (data) => {
      dispatch(togglehasCompany(true))
      dispatch(setCompanyID(createMyCompanyRes.data.createDebutCompany._id))
      setIsCreatingAcompany(false)
      data && setCompanyState(myComapnyInitialState)
      notifySuccess("Company created successfully")
    },
    onError: (error) => { notifyError(" failed to create" + error.message.toString()) }


  })

  const [updateMyCompany] = useMutation(UPDATE_COMPANY, {
    refetchQueries: [{ query: FETCH_COMPANY, variables: { userId: userID } }],
    onCompleted: () => {
      setCompanyState(myComapnyInitialState)
      setIsCreatingAcompany(false)
      notifySuccess("Company updated successfully")
    },
    onError: (error) => { notifyError(" failed to update" + error.message.toString()) }

  })


  useEffect(() => {
    if (!dataCompany) {
      return;
    }

    setCompanyState({
      // ...companyState,
      companyName: dataCompany.getCompanyWithUserId.companyName || '',
      companyMissionStatement: dataCompany.getCompanyWithUserId.companyMissionStatement || '',
      companyHeadquarters: dataCompany.getCompanyWithUserId.companyHeadquarters || '',
      companyWebsite: dataCompany.getCompanyWithUserId.companyWebsite || '',
      companyLogo: dataCompany.getCompanyWithUserId.companyLogo || '',
      jobBoard: dataCompany.getCompanyWithUserId.jobBoard || '',
      linkedInUrl: dataCompany.getCompanyWithUserId.linkedInUrl || '',
      twitterUrl: dataCompany.getCompanyWithUserId.twitterUrl || '',
      facebookUrl: dataCompany.getCompanyWithUserId.facebookUrl || '',
      instagramUrl: dataCompany.getCompanyWithUserId.instagramUrl || '',
      majorAchivements: dataCompany.getCompanyWithUserId.majorAchivements || [],
      companyDescription: dataCompany.getCompanyWithUserId.companyDescription || '',
    });

    dispatch(setCompanyID(dataCompany.getCompanyWithUserId._id));
  }, [dataCompany, dispatch]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyState({ ...companyState, [name]: value })
  }

  // console.log("loadingCompany", loadingCompany)
  // console.log("errorCompany", errorCompany)



  //add to majot achivement to company
  const addToMajorAchovements = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setCompanyState({ ...companyState, majorAchivements: [...companyState.majorAchivements, achivement] })
    setAchivement('')
  }

  const removeMajorAchivement = (index: number) => {
    const newAchivements = companyState.majorAchivements.filter((achivement: string, i: number) => i !== index)
    setCompanyState({ ...companyState, majorAchivements: newAchivements })
  }

  // if (createMyCompanyRes.error || (updateMyCompanyRes.error)) {
  //   createMyCompanyRes.error && notifyError(createMyCompanyRes.error.message.toString())
  //   updateMyCompanyRes.error && notifyError(updateMyCompanyRes.error.message.toString())

  // }

  console.log("companyState", userID)

  const handleCompanySubimt = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', imageSelected)
    // file is the file object
    let imageUri = companyState.companyLogo
    formData.append('upload_preset', 'debutCompanyProfilePicture')
    imageSelected && Axios.post('https://api.cloudinary.com/v1_1/djpiwnxwl/image/upload', formData)
      .then((response) => {
        imageUri = response.data.secure_url
      })

      .catch((error) => {
        notifyError("Error uploading image" + error.message.toString())
        // console.log(error)
      })

    if (isCreatingAcompany) {
      createMyCompany({
        variables: {
          companyInput: {
            ...companyState,
            companyOwner: userID,
            companyCategory: selectedGeography.map((geography: any) => geography.value),
            aeraOfOperation: selectedAeraasOfImpact.map((aera: any) => aera.value),
            companyLogo: imageUri

          }
        }
      })
    }

    else if (hasCompany) {
      updateMyCompany({
        variables: {
          updateDebutCompanyId: companyID,
          companyInput: {
            ...companyState,
            companyCategory: selectedGeography.map((geography: any) => geography.value),
            aeraOfOperation: selectedAeraasOfImpact.map((aera: any) => aera.value),
            companyLogo: imageUri
          }
        }
      })
    }

  }





  if (loading || loadingCompany) { return <Loader /> }
  if ((hasCompany === true) && (error || errorCompany)) {
    // if has company is false dont show thos error otherwise show it

    error && notifyError(error.message.toString())
    errorCompany && notifyError(errorCompany.message.toString())

    // return <div> something went wrong  </div>
  }
  if (data) { dispatch(togglehasCompany(data.checkIfUserHasCompany)) }



  return (
    <>
      <div className='m-5'>
        <p className=' fs-1 fw-light mt-4 mb-1 mx-3' > your company  </p>
        <p className='text-muted fs-6 mt-0 mb-2 mx-3'>
          details and information about your company
        </p>
      </div>
      {!hasCompany && !isCreatingAcompany ?

        <Row>
          <p className='m-5 text-muted fs-2 fw-light text-center'  >
            you haven't registerd a company yet
          </p>
          <Button
            size='md'
            outline
            color='success'
            className='m-5 w-50 mx-auto shadow'
            onClick={() => setIsCreatingAcompany(true)}
          >
            Start registering a company
          </Button>
        </Row>
        :
        <Form className='px-5'  >
          <Row form>

            <Col md={12}>
              <Row  >
                <Col md={9}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Row>
                    <Col md={6}>
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
                    <Col md={6}>
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
                  </Row>
                </Col>
                <Col md={3}
                  className='d-flex flex-column  justify-content-between align-items-center px-5'
                >
                  <img src={companyState?.companyLogo} alt="" className='w-50' />
                  <FormGroup>
                    <Label for="companyLogo"> upload high resolution image of your logo </Label>
                    <Input onChange={(event: any) => { setImageSelected(event.target.files[0]) }} type="file" />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="achievements" className='mt-3' > major achivements as a company</Label>
                <span className='fs-6 text-muted mx-3' >  points of credibility you'd like to highlight on your company profile  </span>

                <div
                  className='d-flex flex-wrap justify-content-start align-items-center mt-3 mx-3'
                >
                  {companyState.majorAchivements.map((savedAchivement: String, index: any) => {
                    return <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.009 }}
                      className=' d-flex fs-6  rounded-3 border-opacity-10 bg-info bg-opacity-10  m-2 p-2  tex-info' key={index}  >
                      {savedAchivement}
                      <p color='link' className='text-danger mx-4  bg-danger bg-opacity-10 rounded-3 p-1'
                        style={{ cursor: 'pointer' }}
                        onClick={() => removeMajorAchivement(index)} >  remove </p>
                    </motion.div>
                  })}
                </div>
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
                {dataCompany && dataCompany.getCompanyWithUserId.aeraOfOperation.map((aera: String, index: any) => {
                  return (<p key={index} className='fs-6 text-success  fw-light  bg-success bg-opacity-10 rounded-pill px-4 py-1 mx-1'>{aera}, </p>)
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
                {dataCompany && dataCompany.getCompanyWithUserId.companyCategory.map((savedRegion: String, index: any) => {
                  return (<p key={index} className='fs-6 text-success  fw-light  bg-success bg-opacity-10 rounded-pill px-4 py-1 mx-1'>
                    {savedRegion}
                  </p>)
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


          <Col md={12} className=' mx-5 my-5'>
            <motion.div whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className=" px-5   mx-5 py-2 my-4 bg-success bg-opacity-25  rounded-pill   "
              style={{ cursor: 'default' }}
              onClick={(e: any) => handleCompanySubimt(e)}
            >
              <p className=' text-success m-2 fs-5 fw-bold text-center' > {hasCompany ? 'update company' : 'create company'} </p>


            </motion.div>
          </Col>
        </Form>
      }
    </>
  );
}
