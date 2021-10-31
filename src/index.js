
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue} from 'firebase/database';

import { getFirebaseConfig } from './firebase-config';

//inicializa firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

//REGISTRO DE CANDIDATOS
//regitrar al candidato y firebase
function registro(candidato) {

    const database = getDatabase();

    const candidN = push(ref(database, 'candidato'));

    set(candidN, candidato);
}

//cuando act firebase recibe al candidato
function getCandid () {

    const database = getDatabase();

    const candidN = ref(database, 'candidato/'  );

    //firebase data
    onValue(candidN, (snapshot)=> {

        const dataC = snapshot.val();

        actCandid(dataC);

    });
}

//organiza y muestra la lista en la alerta
function actCandid(data) {

    let Lcandid = " ";

    Object.keys(data).forEach((key, index)=> {
        
        Lcandid += data[key].id + " , " + data[key].name + "\n";
        
    });
    
    alert(Lcandid);
}

//VOTACION
//registro votacion
function votar(votoss) {

    const database = getDatabase();

     const voteN = push(ref(database, 'votos/' ));
    
    set(voteN, votoss);
}

//votos cuando act firebase
function getVotos(votoss) {

    const database = getDatabase();

    const voteN = ref(database, 'votos' );
    
    onValue(voteN, (snapshot) => {

        const dataV = snapshot.val();
        const total = Object.keys(dataV).length;

        actVotos(dataV);
        agreVotos (total);
    });

}

//organiza y muestra la lista en la alerta
function actVotos(dataV) {

    let Lvotos = " ";

    Object.keys(dataV).forEach((key, index) => {

        Lvotos += dataV[key].id + " , " + dataV[key].cantidad + "\n";
        
    });
    
    alert(Lvotos);
}

//suma los votos
//multiples intentos, nada me fuciono
/*function agreVotos (agregav) {
  
}*/

//DECLARACIONES
//registro
const id1 = document.getElementById('id1');
const nombre = document.getElementById('names');
const regisBtn = document.getElementById('regisBtn');

//votaciones
const id2 = document.getElementById('id2');
const voteBtn = document.getElementById('voteBtn');

//botones extras
const canditBtn = document.getElementById('canditBtn');
const votesBtn = document.getElementById('votesBtn');



//EVENTOS
//registros
const resgistrarC = (e, event) => {
    
    const candidato = {

        id: id1.value,
        name: nombre.value

    }

        registro(candidato);

} 

//votacion
const registrarV = (e, event) => {

    const votoss = {

        id: id2.value,
        name2: nombre.value

    }

    votar(votoss);
}

//EVENTOS
//boton de registro
regisBtn.addEventListener('click', resgistrarC );

//boton votar
voteBtn.addEventListener('click', registrarV );

//boton para ver los candidatos
canditBtn.addEventListener('click', getCandid );

//boton votacion
votesBtn.addEventListener('click', getVotos );


    


