/*
 * <<
 * wormhole
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import {
  LOAD_DATABASES,
  LOAD_DATABASES_SUCCESS,
  ADD_DATABASE,
  ADD_DATABASE_SUCCESS,
  EDIT_DATABASE,
  EDIT_DATABASE_SUCCESS,
  LOAD_DATABASES_INSTANCE,
  LOAD_DATABASES_INSTANCE_SUCCESS,
  LOAD_NAME_EXIST,
  LOAD_NAME_EXIST_SUCCESS,
  LOAD_SINGLE_DATABASE,
  LOAD_SINGLE_DATABASE_SUCCESS,
  GET_ERROR
} from './constants'

export function loadDatabases (resolve) {
  return {
    type: LOAD_DATABASES,
    payload: {
      resolve
    }
  }
}

export function databasesLoaded (databases, resolve) {
  return {
    type: LOAD_DATABASES_SUCCESS,
    payload: {
      databases,
      resolve
    }
  }
}

export function addDatabase (database, resolve) {
  return {
    type: ADD_DATABASE,
    payload: {
      database,
      resolve
    }
  }
}

export function databaseAdded (result, resolve) {
  return {
    type: ADD_DATABASE_SUCCESS,
    payload: {
      result,
      resolve
    }
  }
}

export function editDatabase (database, resolve) {
  return {
    type: EDIT_DATABASE,
    payload: {
      database,
      resolve
    }
  }
}

export function databaseEdited (result, resolve) {
  return {
    type: EDIT_DATABASE_SUCCESS,
    payload: {
      result,
      resolve
    }
  }
}

export function loadDatabasesInstance (value, resolve, reject) {
  return {
    type: LOAD_DATABASES_INSTANCE,
    payload: {
      value,
      resolve,
      reject
    }
  }
}

export function databasesInstanceLoaded (result, resolve, reject) {
  return {
    type: LOAD_DATABASES_INSTANCE_SUCCESS,
    payload: {
      result,
      resolve,
      reject
    }
  }
}

export function loadNameExist (value, resolve, reject) {
  return {
    type: LOAD_NAME_EXIST,
    payload: {
      value,
      resolve,
      reject
    }
  }
}

export function nameExistLoaded (result, resolve, reject) {
  return {
    type: LOAD_NAME_EXIST_SUCCESS,
    payload: {
      result,
      resolve,
      reject
    }
  }
}

export function loadSingleDatabase (databaseId, resolve) {
  return {
    type: LOAD_SINGLE_DATABASE,
    payload: {
      databaseId,
      resolve
    }
  }
}

export function singleDatabaseLoaded (result, resolve) {
  return {
    type: LOAD_SINGLE_DATABASE_SUCCESS,
    payload: {
      result,
      resolve
    }
  }
}

export function getError (error) {
  return {
    type: GET_ERROR,
    payload: {
      error
    }
  }
}

