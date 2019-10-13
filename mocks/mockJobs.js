exports.getJobs = function() {
var FoundJobs = [
    {pickUpLocation:'8200',pickUpDate: '2019-10-20T15:30:00',destination:'05-230',ETADate:'2019-10-22T15:30:00', quantity:'2', quantityUnit: 'hpl',Dimensions:'0.1,3,4', Weigth:'10',bidDeadlineDate:'2019-10-20T15:30:00',specialDemands:'X',id:1},
    {pickUpLocation:'7100',pickUpDate: '2019-10-30T15:30:00',destination:'8000',ETADate:'2019-11-01T15:30:00', quantity:'1', quantityUnit: 'pl',Dimensions:'2,2,2', Weigth:'2000',bidDeadlineDate:'2019-10-20T15:30:00',specialDemands:'Y',id:2}
];
return FoundJobs;
}