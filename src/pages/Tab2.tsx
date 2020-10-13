import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { 
IonContent, 
IonHeader, 
IonPage, 
IonTitle, 
IonToolbar,
IonItem,
IonInput, 
IonButton,
IonLoading, 
IonIcon } from '@ionic/react';
import './Tab2.css';
import {heart, heartHalf} from 'ionicons/icons';
import {loginuser} from '../firebaseConfig'
import {toast} from './toast'


export const Tab2: React.FC = () => {
  const [email, setText] = useState('')
  const [password, setText2] = useState('')
  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory();
  
  async function login(){
    setBusy(true)
    const res = loginuser(email , password)
    if(!res){
      toast('Error en credenciales ');
      
    } else{
      toast('Estas dentro')
      history.push("/tab3"); 
    }
    setBusy(false)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido a SinTabu, Inicia Sesion para continuar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Espera un momento..." duration ={0} isOpen={busy} />
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sign-in</IonTitle>
          </IonToolbar>
        </IonHeader>
        
            <IonItem>
              <IonInput value={email} type="email" color ="primary" placeholder="Correo Electronico" onIonChange={e => setText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput value={password} type="password" placeholder="Contraseña" onIonChange={e => setText2(e.detail.value!)}></IonInput>
            </IonItem>
            <IonButton onClick={login} color="secondary" expand="full" ><IonIcon slot="start" icon={heart}></IonIcon><IonIcon slot="end" icon={heart}> </IonIcon>Sign-in</IonButton>
            <IonButton color="secondary" expand="full" routerLink="/tab1" ><IonIcon slot="start" icon={heartHalf}></IonIcon><IonIcon slot="end" icon={heartHalf}> </IonIcon>Register</IonButton>
          
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
