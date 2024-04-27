import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interfaces";
import { IFilterOptions } from "../interfaces/filter/filter-options.interface";

const filterUsersListByName = (name: string, usersList: IUser[]): IUser[] =>{
  const NAME_NOT_TYPPED = name === undefined || name === '';

  if(NAME_NOT_TYPPED){
    return usersList;
  }

  const FILTERED_LIST = usersList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

  return FILTERED_LIST;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {

  const STATUS_NOT_SELECTED = status === undefined;

  if (STATUS_NOT_SELECTED) {
    return usersList;
  }

  const FILTERED_LIST = usersList.filter((user) => user.ativo === status);

  return FILTERED_LIST;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
  const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if (DATE_NOT_SELECTED) {
    return usersList;
  }

  const CHECK_DATE_INTERVAL = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {start: startDate,end: endDate});

  const FILTERED_LIST = usersList.filter(CHECK_DATE_INTERVAL);

  return FILTERED_LIST;
}

export const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {

  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);

  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

  filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

  return filteredList;
}
