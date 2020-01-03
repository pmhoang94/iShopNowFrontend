
const getLead = (state, getter, rootState) => {
  var leads = { data: [], total: 0 }
  var data = []
  data = _.filter(state.lead, v => {
    v.fromNowCreate = moment.utc(v.createdAt).fromNow()
    v.fromNowUpdate = moment.utc(v.updatedAt).fromNow()
    v.locale = rootState.locale
    v._id = v.id ? v.id : v._id
    var staffInChargeName = _.find(rootState.auth.userList, {
      email: v.staffInCharge
    })
    v.staffInChargeName = staffInChargeName || ''
    v.noteContent = v.note ? commonFunc.shorten(v.note, 50) : ''
    var colorStatus = _.find(state.listStatus, { code: v.status })
    v.colorStatus = colorStatus ? colorStatus.color : ''
    var nameStatus = _.find(state.listStatus, { code: v.status })
    v.nameStatus = nameStatus ? nameStatus.name : ''
    return v
  })
  leads.total = state.total
  leads.data = data
  return leads
}
export default {}
