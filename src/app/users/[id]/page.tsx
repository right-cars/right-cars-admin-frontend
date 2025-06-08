// import {getCookie} from "cookies-next/client";

import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import DocumentBlock from "@/components/views/EditUser/Documents";
// import FinApp from "@/components/views/EditUser/FinApp";
// import Security from "@/components/views/EditUser/Security";
import UserInfoBlock from "@/components/views/EditUser/UserInfoBlock";

import {personalDetailsData, addressData} from "@/data/initialUsersData";

import {getUserById} from "@/api/users";

// @ts-expect-error
export default async function UserEdit({params}) {
    // const role = getCookie("role");

    const {id} = params;

    const data = await getUserById(id);

    personalDetailsData.forEach(item => {
        if(data[item.name]) {
            item.value = data[item.name];
        }
    })

    addressData.forEach(item => {
        if(data[item.name]) {
            item.value = data[item.name];
        }
    });

    const documents = [
        { id: 1, label: "identity document", name: "idOrDriverLicence", url: data.idOrDriverLicence },
        { id: 2, label: "proof of address", name: "proofOfPhysicalAddress", url: data.proofOfPhysicalAddress },
    ];

  return (
          <Container>
              <Toolbar type="users" title={data.fullName} variant="edit" />
              <UserInfoBlock id={id} personalData={personalDetailsData} addressData={addressData} email={data.email} />
              <DocumentBlock documents={documents} />
              {/*<Security/>*/}
              {/*<FinApp />*/}
              {/*{role === "superadmin" ? <Security/> : <div />}*/}
          </Container>
  );
}
