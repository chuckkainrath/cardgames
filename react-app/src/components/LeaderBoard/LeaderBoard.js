import React, { useEffect } from "react";
import "./LeaderBoard.css";
import { useSelector, useDispatch } from "react-redux";


function LeaderBoard() {
    
    return (
      <div class="container">
        <h1 class="mb-8">
    Scrollable Table Fixed Height
  </h1>

	<table class="text-left w-full">
		<thead class="bg-black flex text-white w-full">
			<tr class="flex w-full mb-4">
				<th class="p-4 w-1/4">One</th>
				<th class="p-4 w-1/4">Two</th>
				<th class="p-4 w-1/4">Three</th>
				<th class="p-4 w-1/4">Four</th>
			</tr>
		</thead>
   
		<tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style="height: 50vh;">
			<tr class="flex w-full mb-4">
				<td class="p-4 w-1/4">Dogs</td>
				<td class="p-4 w-1/4">Cats</td>
				<td class="p-4 w-1/4">Birds</td>
				<td class="p-4 w-1/4">Fish</td>
			</tr>
			<tr class="flex w-full mb-4">
				<td class="p-4 w-1/4">Dogs</td>
				<td class="p-4 w-1/4">Cats</td>
				<td class="p-4 w-1/4">Birds</td>
				<td class="p-4 w-1/4">Fish</td>
			</tr>
			<tr class="flex w-full mb-4">
				<td class="p-4 w-1/4">Dogs</td>
				<td class="p-4 w-1/4">Cats</td>
				<td class="p-4 w-1/4">Birds</td>
				<td class="p-4 w-1/4">Fish</td>
			</tr>
			<tr class="flex w-full mb-4">
				<td class="p-4 w-1/4">Dogs</td>
				<td class="p-4 w-1/4">Cats</td>
				<td class="p-4 w-1/4">Birds</td>
				<td class="p-4 w-1/4">Fish</td>
			</tr>
			<tr class="flex w-full mb-4">
				<td class="p-4 w-1/4">Dogs</td>
				<td class="p-4 w-1/4">Cats</td>
				<td class="p-4 w-1/4">Birds</td>
				<td class="p-4 w-1/4">Fish</td>
			</tr>
			
		</tbody>
	</table>
</div>
    );

}

export default LeaderBoard;