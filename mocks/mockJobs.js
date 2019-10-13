exports.getJobs = function() {
var FoundJobs = [
    {pickUplocation:'8200',pickUpDateTime: '2019-10-20T15:30:00',destination:'05-230',ETADateTime:'2019-10-22T15:30:00', quantity:'2', quantityUnit: 'hpl',Dimensions:'0.1,3,4', Weigth:'10',bidDeadlineDateTime:'2019-10-20T15:30:00',specialDemands:'X',id:1},
    {pickUplocation:'7100',pickUpDateTime: '2019-10-30T15:30:00',destination:'8000',ETADateTime:'2019-11-01T15:30:00', quantity:'1', quantityUnit: 'pl',Dimensions:'2,2,2', Weigth:'2000',bidDeadlineDateTime:'2019-10-20T15:30:00',specialDemands:'Y',id:2}
];
return FoundJobs;
}