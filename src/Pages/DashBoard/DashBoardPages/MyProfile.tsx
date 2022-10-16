import React, { useState, useEffect } from 'react'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
// import { setMyDebutTab } from '../../../Store/UI/sidebarController';
import { FETCH_USER_WITH_ID, UPDATE_DEBUT_USER_WITH_ID } from '../../../GraphQl/index'
import { useMutation, useQuery } from '@apollo/client'
import { personalInfoInitialState } from '../../MyDebutInfo/initSattes'
import Loader from '../../../Components/Loader/Loader';
import Axios from 'axios';
import { motion } from 'framer-motion';
import DashboardExperiance from "./DashboardExperiance"


export default function MyProfile() {
  const [imageSelected, setImageSelected] = useState("")
  // const dispatch = useDispatch();
  const { userID } = useSelector((store: RootState) => store.identfiers)
  const { data, loading, error } = useQuery(FETCH_USER_WITH_ID, {
    variables: { getDebutUserWithIdId: userID }
  })
  const [personalInfoForm, setPersonalInfoForm] = useState(personalInfoInitialState)
  console.log(data)
  useEffect(() => {
    if (data) {
      setPersonalInfoForm({
        firstName: data.getDebutUserWithId.firstName === null ? '' : data.getDebutUserWithId.firstName,
        lastName: data.getDebutUserWithId.lastName === null ? '' : data.getDebutUserWithId.lastName,
        preferredName: data.getDebutUserWithId.preferredName === null ? '' : data.getDebutUserWithId.preferredName,
        pronouns: data.getDebutUserWithId.pronouns === null ? '' : data.getDebutUserWithId.pronouns,
        titleAtCompany: data.getDebutUserWithId.titleAtCompany === null ? '' : data.getDebutUserWithId.titleAtCompany,
        linkedinUrl: data.getDebutUserWithId.linkedinUrl === null ? '' : data.getDebutUserWithId.linkedinUrl,
        twitterUrl: data.getDebutUserWithId.twitterUrl === null ? '' : data.getDebutUserWithId.twitterUrl,
        instagramUrl: data.getDebutUserWithId.instagramUrl === null ? '' : data.getDebutUserWithId.instagramUrl,
        facebookUrl: data.getDebutUserWithId.facebookUrl === null ? '' : data.getDebutUserWithId.facebookUrl,
        mailingAddress: data.getDebutUserWithId.mailingAddress === null ? '' : data.getDebutUserWithId.mailingAddress,
        profileImage: data.getDebutUserWithId.profileImage === null ? '' : data.getDebutUserWithId.profileImage,
        email: data.getDebutUserWithId.email === null ? '' : data.getDebutUserWithId.email,
        mobilePhone: data.getDebutUserWithId.mobilePhone === null ? '' : data.getDebutUserWithId.mobilePhone,
        officePhone: data.getDebutUserWithId.officePhone === null ? '' : data.getDebutUserWithId.officePhone,
        preferedContactMethod: data.getDebutUserWithId.preferedContactMethod === null ? '' : data.getDebutUserWithId.preferedContactMethod,
        hasAssistat: data.getDebutUserWithId.hasAssistat === null ? true : data.getDebutUserWithId.hasAssistat,
        assistantName: data.getDebutUserWithId.assistantName === null ? '' : data.getDebutUserWithId.assistantName,
        assistantEmail: data.getDebutUserWithId.assistantEmail === null ? '' : data.getDebutUserWithId.assistantEmail,
        assistantPhone: data.getDebutUserWithId.assistantPhone === null ? '' : data.getDebutUserWithId.assistantPhone,
        // ForumPost: data.getDebutUserWithId.ForumPost ? data.getDebutUserWithId.ForumPost : [],
        // companiesFollowed: data.getDebutUserWithId.companiesFollowed ? data.getDebutUserWithId.companiesFollowed : [],
        // companiesFollowing: data.getDebutUserWithId.companiesFollowing ? data.getDebutUserWithId.companiesFollowing : [],
        // eventsAttended: data.getDebutUserWithId.eventsAttended ? data.getDebutUserWithId.eventsAttended : [],
        // eventsToAttend: data.getDebutUserWithId.eventsToAttend ? data.getDebutUserWithId.eventsToAttend : [],
        // gratitides: data.getDebutUserWithId.gratitudes ? data.getDebutUserWithId.gratitudes : [],
        // comments: data.getDebutUserWithId.comments ? data.getDebutUserWithId.comments : [],
      })
    }
  }, [data])
  console.log("profileee", personalInfoForm.profileImage)
  function UploadImage() {

    const formData = new FormData
    formData.append('file', imageSelected)
    // file is the file object
    // first one is the preset and the second one is name  for cloudnary api
    formData.append('upload_preset', 'debutClient')
    imageSelected && Axios.post('https://api.cloudinary.com/v1_1/djpiwnxwl/image/upload', formData)
      .then((response) => {
        setPersonalInfoForm({ ...personalInfoForm, profileImage: response.data.secure_url })
        console.log(response.data.secure_url)
      }).catch((error) => {
        console.log(error)
      })


  }

  useEffect(() => {
    UploadImage()
  }, [imageSelected])

  const [updatePersonalInfo, updatePersonalInfoRes] = useMutation(UPDATE_DEBUT_USER_WITH_ID,
    {
      update(cache, { data: { updateDebutUser } }) {
        const { ...getDebutUserWithId }: any = cache.readQuery({
          query: FETCH_USER_WITH_ID,
          variables: { getDebutUserWithIdId: userID }
        })
        cache.writeQuery({
          query: FETCH_USER_WITH_ID,
          variables: { getDebutUserWithIdId: userID },
          data: { getDebutUserWithId: updateDebutUser }
        })
      }
    })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfoForm({ ...personalInfoForm, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updatePersonalInfo({
      variables: {
        userInput: personalInfoForm,
        updateDebutUserId: userID
      }
    })
  }


  if (loading || updatePersonalInfoRes.loading) return <div>   <Loader /> </div>
  if (error || updatePersonalInfoRes.error) console.log(error || updatePersonalInfoRes.error)

  return (
    <Form className='px-1' >
      <div className='m-5'>
        <p className=' fs-1 fw-light mt-4 mb-1 mx-3' > personal informaion </p>
        <p className='text-muted fs-6 mt-0 mb-2 mx-3'>  once  your complete  it will be marked as achivement </p>
      </div>
      <Row form className='px-5' >
        <Col md={9} >

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="firstname">first name </Label>
                <Input type="text"
                  name="firstName"
                  value={personalInfoForm.firstName}
                  id="firstName"
                  placeholder={personalInfoForm.firstName}
                  onChange={handleChange} />

              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="lastName">last name</Label>
                <Input type="text"
                  name="lastName"
                  id="lastName"
                  value={personalInfoForm.lastName}
                  placeholder={personalInfoForm.lastName}
                  onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="preferredName"> prefred name</Label>
                <Input type="text"
                  name="preferredName"
                  id="preferredName"
                  value={personalInfoForm.preferredName}
                  placeholder={personalInfoForm.preferredName}
                  onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="pronouns"> pronouns </Label>
                <Input type="text"
                  name="pronouns"
                  id="pronouns"
                  placeholder={personalInfoForm.pronouns}
                  value={personalInfoForm.pronouns}
                  onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col md={8}>
              <FormGroup>
                <Label for="titleAtCompany"> title at your company </Label>
                <Input type="text"
                  name="titleAtCompany"
                  id="titleAtCompany"
                  placeholder={personalInfoForm.titleAtCompany}
                  value={personalInfoForm.titleAtCompany}
                  onChange={handleChange} />
              </FormGroup>
            </Col>




            <Col md={3}>
              <FormGroup>
                <Label for="linkedinUrl"> LinkedIn URL </Label>
                <Input type="text"
                  name="linkedinUrl"
                  id="linkedinUrl"
                  placeholder={personalInfoForm.linkedinUrl}
                  value={personalInfoForm.linkedinUrl}
                  onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="twitterUrl"> twitter URL </Label>
                <Input type="text"
                  name="twitterUrl"
                  id="twitterUrl"
                  placeholder={personalInfoForm.twitterUrl}
                  value={personalInfoForm.twitterUrl}
                  onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="facebookUrl"> facebook URL </Label>
                <Input type="text"
                  name="facebookUrl"
                  id="facebookUrl"
                  placeholder={personalInfoForm.facebookUrl}
                  value={personalInfoForm.facebookUrl}
                  onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="instagramUrl"> instagram URL </Label>
                <Input type="text"
                  name="instagramUrl"
                  id="instagramUrl"
                  placeholder={personalInfoForm.instagramUrl}
                  value={personalInfoForm.instagramUrl}
                  onChange={handleChange} />
              </FormGroup>
            </Col>

            <Col md={12}>
              <FormGroup>
                <Label for="mailingAddress">Mailing address</Label>
                <span className='fs-6 text-muted mx-3' > not shared with anyone , only will be used for goodies and promotional mail </span>
                <Input type="text"
                  name="mailingAddress"
                  id="mailingAddress"
                  placeholder={personalInfoForm.mailingAddress}
                  value={personalInfoForm.mailingAddress}
                  onChange={handleChange} />

              </FormGroup>
            </Col>



            <Col md={6}>
              <FormGroup>
                <Label for="email"> email </Label>
                <Input type="email"
                  name="firstName"
                  id="FirstName"
                  placeholder={personalInfoForm.email}
                  value={personalInfoForm.email}
                  onChange={() => { }}

                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="mobilePhone "> mobile phone </Label>
                <Input type="number"
                  name="mobilePhone"
                  id="mobilePhone"
                  placeholder={personalInfoForm.mobilePhone}
                  value={personalInfoForm.mobilePhone}
                  onChange={handleChange}

                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="officePhone "> office phone </Label>
                <Input type="number"
                  name="officePhone"
                  id="officePhone"
                  placeholder={personalInfoForm.officePhone}
                  value={personalInfoForm.officePhone}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="preferedContactMethod"> prefred contact method</Label>
                <Input type="select" name="preferedContactMethod" id="preferedContactMethod"
                  value={personalInfoForm.preferedContactMethod}
                  onChange={handleChange}

                >
                  <option value="email" > email  </option>
                  <option value="mobile "  > phone  </option>
                  <option value="office phone" > office phone  </option>

                </Input>
              </FormGroup>
            </Col>


            <p className='fs-6 fw-lighter text-muted mt-5' >
              if you have an assistant and wish to be contacted through them , please enter their information below
            </p>


            <Col md={4}>
              <FormGroup>
                <Label for="assistantName ">  Assistant full name   </Label>
                <Input type="text"
                  name="assistantName"
                  id="assistantName"
                  placeholder={personalInfoForm.assistantName}
                  value={personalInfoForm.assistantName}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="assistantEmail "> Assistant Email </Label>
                <Input type="email"
                  name="assistantEmail"
                  id="assistantEmail"
                  placeholder={personalInfoForm.assistantEmail}
                  value={personalInfoForm.assistantEmail}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="assistantPhone "> Assistants phone number </Label>
                <Input type="number"
                  name="assistantPhone"
                  id="assistantPhone"
                  placeholder={personalInfoForm.assistantPhone}
                  value={personalInfoForm.assistantPhone}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>

          </Row>
        </Col>

        <Col md={3} className="px-4 mx-4 d-flex  flex-column justify-content-around align-items-center"
          style={{
            width: '20em',
            height: '25em',
          }}
        >
          <img src={personalInfoForm?.profileImage} className='img-fluid  my-5 ' />
          <FormGroup className='my-3' >
            <Label for="companyProfilePhoto">  choose new phopto
            </Label>
            <Input onChange={(event: any) => {
              setImageSelected(event.target.files[0])
            }}
              type="file" />
          </FormGroup>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center align-items-center mx-5 my-2'
        onClick={(e) => handleSubmit(e)}>
        <motion.div whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className=" px-5   d-flex justify-content-center align-items-center  mx-5 py-2 my-4 bg-success bg-opacity-25  rounded-pill  border border-success "
          style={{ cursor: 'default' }}>
          <p className=' text-success m-2 fs-5 fw-bold' > save personal info   </p>
        </motion.div>
      </Row>

      <Row>

        <div className='m-5'>
          <p className=' fs-1 fw-light mt-4 mb-1 mx-3' > professional Experiance </p>
          <p className='text-muted fs-6 mt-0 mb-2 mx-3'>
            identfy your personal and professional expertise
          </p>
        </div>
      </Row>



      <Row>
        <DashboardExperiance />
      </Row>


    </Form>
  );
}


