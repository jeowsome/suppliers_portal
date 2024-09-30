<template>
	<form @submit.prevent="">
		<div class="container mt-5 py-3 border">
			<div class="row mb-3">
				<div class="col-6">
					<h1 class="text-gray-900 font-bold text-[32px]">New Invoice</h1>
				</div>
				<div class="col-6">
					<div class="d-flex">
						<div class="ms-auto">
							<div class="btn-group" role="group" aria-label="Basic example">
								<button type="button" class="btn btn-primary btn-light">
									<router-link to="/">Cancel</router-link>
								</button>
								<button
									type="button"
									class="btn btn-primary btn-dark"
									@click="saveInvoice"
								>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container border-bottom pb-3">
				<div class="mb-2 row">
					<div class="col">
						<div class="row">
							<label for="supplier_invoice_number" class="col-sm-3 col-form-label"
								>Invoice Number</label
							>
							<div class="col-sm-5">
								<input
									type="text"
									class="form-control"
									id="supplier_invoice_number"
									v-model.number="invoiceData.supplier_invoice_number"
									required
								/>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="row">
							<label for="service_date" class="col-sm-3 col-form-label"
								>Service Date</label
							>
							<div class="col-sm-5">
								<TextInput
									:type="'date'"
									size="lg"
									variant="outline"
									placeholder="Service Date"
									id="service_date"
									:disabled="false"
									v-model="invoiceData.service_date"
								/>
							</div>
						</div>
					</div>
				</div>

				<div class="mb-2 row">
					<div class="col">
						<div class="row">
							<label for="suppplier_id" class="col-sm-3 col-form-label"
								>Supplier ID</label
							>
							<div class="col-sm-5">
								<input
									type="text"
									readonly
									class="form-control-plaintext"
									id="suppplier_id"
									:value="invoiceData.supplier"
								/>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="row">
							<label for="invoice_date" class="col-sm-3 col-form-label"
								>Invoice Date</label
							>
							<div class="col-sm-5">
								<TextInput
									:type="'date'"
									size="lg"
									variant="outline"
									placeholder="Invoice Date"
									id="invoice_date"
									:disabled="false"
									v-model="invoiceData.invoice_date"
								/>
							</div>
						</div>
					</div>
				</div>

				<div class="mb-2 row">
					<div class="col">
						<div class="row">
							<label for="suppplier_name" class="col-sm-3 col-form-label"
								>Supplier Name</label
							>
							<div class="col-sm-5">
								<input
									type="text"
									readonly
									class="form-control-plaintext"
									id="suppplier_name"
									:value="invoiceData.supplier_name"
								/>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="row">
							<label for="invoice_terms" class="col-sm-3 col-form-label"
								>Invoice Terms</label
							>
							<div class="col-sm-5">
								<select
									class="form-select form-select-mb"
									aria-label="Invoice Terms"
									v-model="invoiceData.invoice_terms"
								>
									<option readonly></option>
									<option
										v-for="option in invoiceTermOptions"
										:value="option.value"
									>
										{{ option.label }}
									</option>
								</select>
							</div>
						</div>
					</div>
				</div>

				<div class="mb-2 row">
					<div class="col">
						<div class="accordion accordion-flush" id="service-address-accordion">
							<div class="accordion-item">
								<h2 class="accordion-header ps-0">
									<button
										class="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										Service Address
									</button>
								</h2>
								<div
									id="collapseOne"
									class="accordion-collapse collapse show"
									data-bs-parent="#service-address-accordion"
								>
									<div class="accordion-body">
										<div class="row mb-1">
											<label for="street" class="col-sm-3 col-form-label"
												>Street</label
											>
											<div class="col-sm-5">
												<input
													type="text"
													class="form-control"
													id="street"
													v-model="invoiceData.street"
												/>
											</div>
										</div>
										<div class="row mb-1">
											<label for="city" class="col-sm-3 col-form-label"
												>City</label
											>
											<div class="col-sm-5">
												<input
													type="text"
													class="form-control"
													id="city"
													v-model="invoiceData.city"
												/>
											</div>
										</div>
										<div class="row mb-1">
											<label for="state" class="col-sm-3 col-form-label"
												>State</label
											>
											<div class="col-sm-5">
												<input
													type="text"
													class="form-control"
													id="state"
													v-model="invoiceData.state"
												/>
											</div>
										</div>
										<div class="row mb-1">
											<label for="zip_code" class="col-sm-3 col-form-label"
												>Zip Code</label
											>
											<div class="col-sm-5">
												<input
													type="text"
													class="form-control"
													id="zip_code"
													v-model="invoiceData.zip_code"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col">
						<div
							class="accordion accordion-flush"
							id="address-accordion"
							v-if="!sessionSupplierId()"
						>
							<div class="accordion-item">
								<h2 class="accordion-header ps-0">
									<button
										class="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapse-2"
										aria-expanded="true"
										aria-controls="collapse-2"
									>
										Payment Reference and Notes
									</button>
								</h2>
								<div
									id="collapse-2"
									class="accordion-collapse collapse show"
									data-bs-parent="#address-accordion"
								>
									<div class="accordion-body">
										<div class="row mb-1">
											<label
												for="payment_reference_no"
												class="col-sm-3 col-form-label"
												>Payment Reference</label
											>
											<div class="col-sm-5">
												<input
													type="text"
													class="form-control"
													id="payment_reference_no"
													v-model="invoiceData.payment_reference_no"
												/>
											</div>
										</div>
										<div class="row mb-1">
											<label
												for="payment_reference_date"
												class="col-sm-3 col-form-label"
												>Payment Date</label
											>
											<div class="col-sm-5">
												<TextInput
													:type="'date'"
													size="lg"
													variant="outline"
													placeholder="Payment Date"
													id="payment_reference_date"
													:disabled="false"
													v-model="invoiceData.payment_reference_date"
												/>
											</div>
										</div>
										<div class="row mb-1">
											<label for="notes" class="col-sm-3 col-form-label"
												>Notes</label
											>
											<div class="col-sm-5">
												<Textarea
													:variant="'subtle'"
													size="md"
													placeholder="Enter Notes Here"
													:disabled="false"
													v-model="invoiceData.notes"
													label="Notes"
													id="notes"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container">
				<h4>Invoice item</h4>
				<table class="table" v-if="invoiceItems.length !== 0">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Service Type</th>
							<th scope="col">Quantity</th>
							<th scope="col">Rate</th>
							<th scope="col">Amount</th>
						</tr>
					</thead>
					<tbody class="table-group-divider">
						<tr v-for="(item, index) in invoiceItems" :key="index">
							<th scope="row">{{ index + 1 }}</th>
							<td>
								<select
									class="form-select form-select-mb"
									aria-label="Service Types"
									v-model="item.service_type"
								>
									<option readonly></option>
									<option
										v-for="option in serviceTypeOption"
										:value="option.value"
									>
										{{ option.label }}
									</option>
								</select>
							</td>
							<td>
								<input type="text" class="form-control" v-model="item.quantity" />
							</td>
							<td>
								<div class="input-group">
									<span class="input-group-text"
										><i class="bi bi-currency-dollar"></i>
									</span>
									<input
										type="text"
										class="form-control"
										v-model.number="item.rate"
									/>
								</div>
							</td>
							<td>
								<div class="input-group">
									<span class="input-group-text"
										><i class="bi bi-currency-dollar"></i>
									</span>
									<input
										type="text"
										readonly
										class="form-control"
										v-model.number="item.amount"
									/>
								</div>
							</td>
							<td>
								<button type="button" class="btn btn-dark btn-sm">
									<i @click="deleteRow(index)" class="bi bi-trash"></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="d-flex">
					<div :class="invoiceItems.length === 0 ? 'ms-auto pt-3' : 'ms-auto'">
						<div class="btn-group" role="group" aria-label="Basic example">
							<button type="button" class="btn btn-dark btn-sm" @click="addRow">
								<i class="bi bi-plus"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="mb-2 row">
					<div class="col"></div>
					<div class="col">
						<div class="row">
							<label for="total_amount" class="col-sm-3 col-form-label"
								>Total Amount</label
							>
							<div class="col-sm-5">
								<input
									type="text"
									readonly
									class="form-control-plaintext"
									id="total_amount"
									:value="invoiceData.total_amount"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { createListResource } from 'frappe-ui'
import { sessionSupplierId, sessionSupplierName } from '../data/session'
import router from '../router'
import TextInput from 'frappe-ui/src/components/TextInput.vue'
import Textarea from 'frappe-ui/src/components/Textarea.vue'

const portalInvoice = createListResource({
	doctype: 'Supplier Portal Invoices',
	insert: {
		onSuccess() {
			router.push({ name: 'SupplierInvoiceList' })
		},
	},
})

const invoiceTermOptions = [
	{
		label: 'NET 10',
		value: 'NET 10',
	},
	{
		label: 'NET 15',
		value: 'NET 15',
	},
	{
		label: 'NET 30',
		value: 'NET 30',
	},
	{
		label: 'NET 45',
		value: 'NET 45',
	},
	{
		label: 'NET 60',
		value: 'NET 60',
	},
]

const serviceTypeOption = [
	{
		label: 'Repair',
		value: 'Repair',
	},
	{
		label: 'Preventive Maintenance',
		value: 'Preventive Maintenance',
	},
]

const invoiceData = reactive({
	supplier_invoice_number: '',
	supplier: sessionSupplierId(),
	service_date: new Date().toISOString().split('T')[0],
	invoice_date: new Date().toISOString().split('T')[0],
	supplier_name: sessionSupplierName(),
	invoice_terms: '',
	total_amount: 0,
	street: '',
	city: '',
	state: '',
	zip_code: '',
	payment_reference_no: '',
	payment_reference_date: new Date().toISOString().split('T')[0],
	notes: '',
})

const invoiceItems = reactive([])

const addRow = () => {
	const rowObject = reactive({
		service_type: '',
		quantity: 0,
		rate: 0,
		amount: 0,
	})
	rowObject.amount = computed(() => rowObject.quantity * rowObject.rate)
	invoiceItems.push(rowObject)
}

const deleteRow = (index) => {
	invoiceItems.splice(index, 1)
}

invoiceData.total_amount = computed(() => {
	return invoiceItems.reduce((acc, item) => acc + item.amount, 0)
})

const saveInvoice = () => {
	portalInvoice.insert.submit({
		supplier_invoice_number: invoiceData.supplier_invoice_number,
		supplier: invoiceData.supplier,
		service_date: invoiceData.service_date,
		invoice_date: invoiceData.invoice_date,
		supplier_name: invoiceData.supplier_name,
		invoice_terms: invoiceData.invoice_terms,
		street: invoiceData.street,
		city: invoiceData.city,
		state: invoiceData.state,
		zip_code: invoiceData.zip_code,
		payment_reference_date: invoiceData.payment_reference_date,
		payment_reference_no: invoiceData.payment_reference_no,
		notes: invoiceData.notes,
		supplier_invoice_items: invoiceItems.map((item) => {
			return {
				service_type: item.service_type,
				quantity: item.quantity,
				rate: item.rate,
			}
		}),
	})
}
</script>

<style lang="css" scoped>
input.form-control-plaintext:focus {
	background-color: #fff;
	border-color: #fff;
	box-shadow: none;
}

tr {
	vertical-align: middle;
}
</style>
