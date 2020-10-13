import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem,IonInput,IonButton, IonIcon, IonLoading } from '@ionic/react';
import './Tab1.css';
import {heartHalf} from 'ionicons/icons';
import {toast} from './toast'
import {registeruser} from '../firebaseConfig'

export const Tab1: React.FC = () => {


  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [constrasena, setText3] = useState('');
  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory();

  async function register(){
    setBusy(true)
    const res = await registeruser(text, text2)
    if (res ==true ){toast('Te has registrado'); history.push("/tab3");}
    if (text2.trim()=='' || text.trim()==''){toast('Correo y constraseña son necesarios para registro')}
    if (text2!==constrasena){toast('No coinciden las contraseñas')}  
    if (text2.toString().length<6){toast('La contraseña tiene que tener mas de 6 caracteres')}
    setBusy(false)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido a SinTabu, Registrate para obtener los privilegions de un miembro</IonTitle>
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
              <IonInput 
              value={text} 
              type="email" 
              color ="primary" 
              placeholder="Usuario" 
              onIonChange={e => setText(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput 
              value={text2} 
              type="password" 
              placeholder="Contraseña" 
              onIonChange={e => setText2(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput 
              value={constrasena} 
              type="password" 
              placeholder="Confirmar Contraseña" 
              onIonChange={e => setText3(e.detail.value!)}></IonInput>
            </IonItem>
            <IonButton 
             color="secondary" 
             expand="full" 
             onClick={register}>
            <IonIcon slot="start" icon={heartHalf}>
            </IonIcon><IonIcon 
             slot="end" 
             icon={heartHalf}> 
            </IonIcon>Register</IonButton>
          
        
      </IonContent>
    </IonPage>
  );
};
export default Tab1;
