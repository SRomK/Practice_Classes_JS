import './css/index.css';
import './css/materialdesignicons.css';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import LoginRouter from './components/Login/LoginRouter';
import CamoPage from './components/Camo/CamoPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import NewsList from './components/News/NewsList';
import MandatoryNews from './components/News/MandatoryNews';
import HomePage from './components/Home/HomePage';
import ReportsPage from './components/Reports/ReportsPage';
import DocumentsPage from './components/Documents/DocumentsPage';
import SmsPage from './components/SMS/SmsPage';
import MailingPage from './components/Mailing/MailingPage';
import LegendDialog from './components/Schedule/LegendDialog/LegendDialog';
import ProgramPhases from './components/Courses/ProgramPhase/ProgramPhases';
import ProgramCompetencies from './components/Courses/ProgramCompetency/ProgramCompetencies';
import UserAccountPage from './components/Users/Account/UserAccountPage';
import FlightsPage from './components/Flights/FlightsPage';
import LoginPage from 'components/Login/LoginPage';
import AircraftDocuments from './components/Aircraft/AircraftDocuments/AircraftDocuments';
import UserDocuments from './components/Users/UserDocuments/UserDocuments';
import UserClocks from 'components/Users/UserClocks/UserClocks';
import MissionTab from 'components/Courses/Missions/MissionTab/MissionTab';
import TheoryTab from 'components/Courses/Theory/TheoryTab/TheoryTab';
import UserLogbook from './components/Users/Logbook/UserLogbookTab2';
import UserMemoTab from 'components/Users/UserMemoTab/UserMemoTab';
import TheoryProgress from 'components/Users/Courses/TheoryProgress/TheoryProgress';
// import ProgramTimes from 'components/Courses/Program/ProgramTimes';

// Dialogs
import TheoryViewDialog from 'components/Courses/Theory/TheoryViewDialog/TheoryViewDialog';
import ViewUserExercisesDialog from './components/Users/Courses/ViewUserExercisesDialog/ViewUserExercisesDialog';
//import SavedEvaluationsDialog from './components/Courses/Missions/SavedEvaluationsDialog/SavedEvaluationsDialog';
import LessonSelectDialog from './components/Courses/Missions/LessonSelectDialog/LessonSelectDialog';
//import UserCourseStatusDialog from './components/Users/Courses/UserCourseStatusDialog/UserCourseStatusDialog';
//import UserAvailabilityDialog from './components/Users/Availabiltiy/UserAvailabilityDialog/UserAvailabilityDialog.jsx';
import FlightEditDialog from './components/Flights/FlightEditDialog/FlightEditDialog';
import UserCourseStatusDialog from './components/Users/Courses/UserCourseStatusDialog/UserCourseStatusDialog';
import RoleDialog from './components/Users/RoleDialog/RoleDialog2';
import DeleteReccurentEventDialog from './components/Schedule/DeleteRecurringEventDialog/DeleteRecurringEventDialog2';
import FootprintDialog from './components/FootprintDialog/FootprintDialog';
import FlightEvaluationDialog from './components/Flights/FlightEvaluationDialog/FlightEvaluationDialog';
// import TheoryTab from './components/Courses/Program/Ground/TheoryTab';
import ClassroomBookingDialog from './components/Schedule/ClassroomBookingDialog/ClassroomBookingDialog';
import AircraftBookingDialog from './components/Schedule/AircraftBookingDialog/AircraftBookingDialog';
import ActivityBookingDialog from 'components/Schedule/ActivityBookingDialog/ActivityBookingDialog';
import InvoiceFlightDialog from './components/Invoices/InvoiceFlightDialog/InvoiceFlightDialog';
import AutoscheduleDialog from 'components/Schedule/AutoScheduleDialog/AutoScheduleDialog';
import SettingsDialog from 'components/SettingsDialog/SettingsDialog';

console.log('[REACT] Loading React');

function mountComponent(id, component) {
	let div = document.getElementById(id);
	if (div !== null) {
		console.log(`[REACT] Rendering #${id}`);
		ReactDOM.render(component, div);
	}
	else
		console.error(`[REACT] Element #${id} not found`);
}

function mountComponentOnEvent(event, id, component) {
	window.addEventListener(event, (e) => {
		mountComponent(id, component);
	});
}

// DEBUG
mountComponent('root', <LoginRouter />);

// PRODUCTION
mountComponent('login', <LoginPage />); // Always mounted at the beginning
  
// // These have to be mounted on event
mountComponent('viewUserExercisesDialog', <ViewUserExercisesDialog />);
// // mountComponent('viewSavedEvaluationsDialog', <SavedEvaluationsDialog />);
// //mountComponent('viewUserProgressDialog', <ViewUserProgressDialog></ViewUserProgressDialog>);
// //mountComponent('userCourseStatusDialog', <UserCourseStatusDialog></UserCourseStatusDialog>);
//mountComponent('userAvailabilityDialog', <UserAvailabilityDialog></UserAvailabilityDialog>);
mountComponent('userCourseStatusDialog', <UserCourseStatusDialog />);
// // mountComponent('userAvailabilityDialog', <UserAvailabilityDialog />);
mountComponent('programPhases', <ProgramPhases/>);
mountComponent('programCompetencies', <ProgramCompetencies/>);

//Modules
mountComponentOnEvent("mountHomePage", 'reactHome', <HomePage />);
mountComponentOnEvent("mountMandatoryNews", 'mandatoryNews', <MandatoryNews />);
mountComponentOnEvent("mountNewsPage", 'news', <NewsList />);
mountComponentOnEvent("mountDashboardPage", 'dashboard', <DashboardPage />);
mountComponentOnEvent("mountFlightsPage", 'flights', <FlightsPage/>);
mountComponentOnEvent("mountSmsPage", 'sms', <SmsPage />);
mountComponentOnEvent("mountReportsPage", 'reactReports', <ReportsPage />);
mountComponentOnEvent("mountDocumentsPage", 'documents', <DocumentsPage />);
mountComponentOnEvent("mountMailingPage",'mail', <MailingPage />);
mountComponentOnEvent("mountCamoPage",'camo', <CamoPage />);

//Dialogs
mountComponentOnEvent('mountLegendDialog', 'legendDialog', <LegendDialog />);
mountComponentOnEvent('mountAutoScheduleDialog', 'autoScheduleDialog', <AutoscheduleDialog />);
mountComponentOnEvent('mountRoleDialog', 'roleDialog', <RoleDialog />);
mountComponentOnEvent('mountDeleteRecurringEventDialog', 'deleteRecurringEventDialog', <DeleteReccurentEventDialog />);
mountComponentOnEvent('mountFootprintsDialog', 'footprintsDialog', <FootprintDialog />);
mountComponentOnEvent('mountFlightEvaluationDialog', 'flightEvaluationDialog', <FlightEvaluationDialog />);
mountComponentOnEvent('mountFlightEditDialog', 'flightEditDialog', <FlightEditDialog />);
mountComponentOnEvent('mountClassroomBookingDialog', 'classroomBookingDialog', <ClassroomBookingDialog />);
mountComponentOnEvent('mountAircraftBookingDialog', 'aircraftBookingDialog', <AircraftBookingDialog />);
mountComponentOnEvent('mountActivityBookingDialog', 'activityBookingDialog', <ActivityBookingDialog />);
mountComponentOnEvent('mountAutoScheduleDialog', 'autoScheduleDialog', <AutoscheduleDialog />);
mountComponentOnEvent('mountInvoiceFlightDialog', 'invoiceFlightDialog', <InvoiceFlightDialog />);
mountComponentOnEvent('mountLessonSelectDialog', 'lessonSelectDialog', <LessonSelectDialog/>);
mountComponentOnEvent('mountTheoryViewDialog', 'theoryViewDialogReact', <TheoryViewDialog/>);
mountComponentOnEvent('mountSettingsDialog', 'settingsDialog', <SettingsDialog/>);

// Mounts user account with idUser
window.addEventListener('mountUserAccount', (e) => {
	mountComponent('userAccount', <UserAccountPage idUser={e.detail.idUser}/>);
});

// Mounts user logbook with idUser
window.addEventListener('mountUserLogbook', (e) => {
	mountComponent('userLogbook', <UserLogbook idUser={e.detail.idUser}/>);
});

// Mounts FlightsPage Component with a idFlight
window.addEventListener('mountFlightPageWithIdFlight', (e) => {
	mountComponent('flights', <FlightsPage idFlight={e.detail.idFlight}/>);
});

window.addEventListener('mountAircraftDocuments', (e) => {
	mountComponent('aircraftDocuments', <AircraftDocuments idAircraft={e.detail.idAircraft}/>);
});

window.addEventListener('mountUserDocuments', (e) => {
	mountComponent('userDocuments', <UserDocuments idUser={e.detail.idUser}/>);
});

window.addEventListener('mountUserClocks', (e) => {
	mountComponent('userClocks', <UserClocks idUser={e.detail.idUser}/>);
});

window.addEventListener('mountMissionTab', (e) => {
	mountComponent('missionTab', <MissionTab program={e.detail.program} onUpdateProgramTimes={e.detail.onUpdateProgramTimes}/>);
});

window.addEventListener('mountTheoryTab', (e) => {
	mountComponent('theory', <TheoryTab idProgram={e.detail.idProgram} onUpdateProgramTimes={e.detail.onUpdateProgramTimes}/>);
});
// window.addEventListener('mountProgramTimes', (e) => {
// 	mountComponent('programTimes', <ProgramTimes idProgram={e.detail.idProgram} />);
// });

window.addEventListener('mountMemo', (e) => {
	mountComponent('memo', <UserMemoTab idStudent={e.detail.idUser}/>);
});

window.addEventListener('mountTheoryProgress', (e) => {
	const { idProgram, idUser, id } = e.detail;
	mountComponent(id, <TheoryProgress idProgram={idProgram} idUser={idUser}/>);
});

window.dispatchEvent(new CustomEvent("ReactLoaded"));
