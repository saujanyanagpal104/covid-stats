import React, { Component } from 'react';
import FilterableTable from 'react-filterable-table';
import tableData from '../data/content.json';

const DataTable = () => {
    const data = tableData.todayData
    const fields = [
        {name: 'country', displayName: 'Country', inputFilterable: true, sortable: true},
        {name: 'total_cases', displayName: 'Total Cases',},
        {name: 'new_cases', displayName: 'New Cases',},
        {name: 'total_deaths', displayName: 'Total Deaths',},
        {name: 'new_deaths', displayName: 'New Deaths',},
        {name: 'active_cases', displayName: 'Active Cases',},
        {name: 'critical_cases', displayName: 'Critical Cases',},
        {name: 'recovered_cases', displayName: 'Recovered Cases',},
        {name: 'total_cases_per_million', displayName: 'Cases/million',},
        {name: 'total_deaths_per_million', displayName: 'Deaths/million',},
    ]